import { all, put, select, take } from 'redux-saga/effects';

import { ReleaseAction, State, StrokeAction, getAnalyserNode } from '../store';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

type Oscillators = Map<
  number,
  {
    oscNodes: OscillatorNode[];
    amp: GainNode;
    noise: AudioBufferSourceNode;
    noiseGain: GainNode;
  }
>;

export function* keyboard() {
  const ctx = new AudioContext();

  const analyserNode = ctx.createAnalyser();
  yield put(getAnalyserNode({ analyserNode }));

  const oscillators: Oscillators = new Map();

  const masterGain = ctx.createGain();
  masterGain.connect(analyserNode).connect(ctx.destination);

  yield all([stroke(ctx, masterGain, oscillators), release(ctx, oscillators)]);
}

function* stroke(ctx: AudioContext, masterGain: GainNode, oscMap: Oscillators) {
  while (true) {
    const {
      payload: { id, freq },
    } = (yield take('stroke')) as StrokeAction;

    const {
      waveform,
      gain,
      unison,
      detune,
      attack,
      decay,
      sustain,
      noiseGain,
    } = ((yield select()) as State).old;

    const oscs: OscillatorNode[] = [];
    const median = Math.floor(unison / 2);

    const amp = ctx.createGain();

    for (let i = 0; i < unison; i++) {
      const oscNode = ctx.createOscillator();
      oscNode.frequency.value = freq + (i - median) * detune;
      oscNode.type = waveform;
      amp.gain.setValueAtTime(0, ctx.currentTime);
      amp.gain.linearRampToValueAtTime(gain, ctx.currentTime + attack);
      amp.gain.linearRampToValueAtTime(
        sustain * gain,
        ctx.currentTime + attack + decay
      );
      oscNode.connect(amp);
      oscs.push(oscNode);
    }

    const noise = ctx.createBufferSource();
    const noiseGainNode = ctx.createGain();
    noiseGainNode.gain.value = noiseGain;
    const channels = 2;
    const frameCount = ctx.sampleRate * 2.0;
    const audioBuffer = ctx.createBuffer(channels, frameCount, ctx.sampleRate);

    for (let channel = 0; channel < channels; channel++) {
      const nowBuffering = audioBuffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        nowBuffering[i] = Math.random() * 2 - 1;
      }
    }

    noise.buffer = audioBuffer;
    noise.connect(noiseGainNode).connect(amp);

    amp.connect(masterGain);

    oscMap.set(id, { oscNodes: oscs, amp, noise, noiseGain: noiseGainNode });

    masterGain.gain.setValueAtTime(0, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(gain, ctx.currentTime + attack);
    masterGain.gain.linearRampToValueAtTime(
      sustain * gain,
      ctx.currentTime + attack + decay
    );

    for (const osc of oscs) osc.start();
    noise.start();
  }
}

function* release(ctx: AudioContext, oscMap: Oscillators) {
  while (true) {
    const {
      payload: { id },
    } = (yield take('release')) as ReleaseAction;

    const { release } = ((yield select()) as State).old;

    const oscs = oscMap.get(id);
    if (oscs !== undefined) {
      const endTime = ctx.currentTime + release;
      oscs.amp.gain.linearRampToValueAtTime(0, endTime);

      for (const oscNode of oscs.oscNodes) oscNode.stop(endTime);
      oscs.noise.stop(endTime);
    }
  }
}
