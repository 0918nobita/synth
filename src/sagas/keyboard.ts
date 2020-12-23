import { all, put, select, take } from 'redux-saga/effects';

import {
  ReleaseAction,
  State,
  StrokeAction,
  UpdateGainAction,
  getAnalyzerNode,
} from '../store';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

type Oscillators = Map<number, OscillatorNode[]>;

export function* keyboard() {
  const ctx = new AudioContext();

  const analyzerNode = ctx.createAnalyser();
  yield put(getAnalyzerNode({ analyzerNode }));

  const oscillators: Oscillators = new Map();

  const gainNode = ctx.createGain();
  gainNode.connect(analyzerNode).connect(ctx.destination);

  yield all([
    gain(gainNode),
    stroke(ctx, gainNode, oscillators),
    release(gainNode, oscillators),
  ]);
}

function* gain(gainNode: GainNode) {
  while (true) {
    const {
      payload: { rate },
    } = (yield take('updateGain')) as UpdateGainAction;

    gainNode.gain.value = rate;
  }
}

function* stroke(ctx: AudioContext, gainNode: GainNode, oscMap: Oscillators) {
  while (true) {
    const {
      payload: { id, freq },
    } = (yield take('stroke')) as StrokeAction;

    const { waveform, unison, detune } = (yield select()) as State;

    const oscs: OscillatorNode[] = [];
    const median = Math.floor(unison / 2);

    for (let i = 0; i < unison; i++) {
      const osc = ctx.createOscillator();
      osc.frequency.value = freq + (i - median) * detune;
      osc.type = waveform;
      osc.connect(gainNode);
      oscs.push(osc);
    }

    oscMap.set(id, oscs);

    for (const osc of oscs) osc.start();
  }
}

function* release(gainNode: GainNode, oscMap: Oscillators) {
  while (true) {
    const {
      payload: { id },
    } = (yield take('release')) as ReleaseAction;

    const oscs = oscMap.get(id);
    if (oscs !== undefined) {
      for (const osc of oscs) {
        osc.stop();
        osc.disconnect(gainNode);
      }
    }
  }
}
