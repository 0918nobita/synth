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

  yield put(getAnalyzerNode({ analyzerNode: ctx.createAnalyser() }));

  const oscillators: Oscillators = new Map();

  const gainNode = ctx.createGain();
  gainNode.connect(ctx.destination);

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

    const { waveform, analyzer, unison } = (yield select()) as State;

    const oscs: OscillatorNode[] = [];
    const median = Math.floor(unison / 2);
    const detune = 20;

    for (let i = 0; i < unison; i++) {
      const osc = ctx.createOscillator();
      osc.frequency.value = freq + (i - median) * detune;
      osc.type = waveform;
      if (analyzer !== null) osc.connect(analyzer);
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

        const { analyzer } = (yield select()) as State;
        if (analyzer != null) osc.disconnect(analyzer);

        osc.disconnect(gainNode);
      }
    }
  }
}
