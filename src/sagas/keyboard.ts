import { all, put, select, take } from 'redux-saga/effects';

import { ReleaseAction, State, StrokeAction, getAnalyzerNode } from '../store';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

type Oscillators = Map<number, { oscNodes: OscillatorNode[]; amp: GainNode }>;

export function* keyboard() {
  const ctx = new AudioContext();

  const analyzerNode = ctx.createAnalyser();
  yield put(getAnalyzerNode({ analyzerNode }));

  const oscillators: Oscillators = new Map();

  const gainNode = ctx.createGain();
  gainNode.connect(analyzerNode).connect(ctx.destination);

  yield all([stroke(ctx, gainNode, oscillators), release(ctx, oscillators)]);
}

function* stroke(ctx: AudioContext, gainNode: GainNode, oscMap: Oscillators) {
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
    } = (yield select()) as State;

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
      oscNode.connect(amp).connect(gainNode);
      oscs.push(oscNode);
    }

    oscMap.set(id, { oscNodes: oscs, amp });

    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(gain, ctx.currentTime + attack);
    gainNode.gain.linearRampToValueAtTime(
      sustain * gain,
      ctx.currentTime + attack + decay
    );

    for (const osc of oscs) osc.start();
  }
}

function* release(ctx: AudioContext, oscMap: Oscillators) {
  while (true) {
    const {
      payload: { id },
    } = (yield take('release')) as ReleaseAction;

    const { release } = (yield select()) as State;

    const oscs = oscMap.get(id);
    if (oscs !== undefined) {
      const endTime = ctx.currentTime + release;
      oscs.amp.gain.linearRampToValueAtTime(0, endTime);

      for (const oscNode of oscs.oscNodes) {
        oscNode.stop(endTime);
      }
    }
  }
}
