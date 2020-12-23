import { all, put, select, take } from 'redux-saga/effects';

import { State, StrokeAction, ReleaseAction, getAnalyzerNode } from '../store';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

type Oscillators = Map<number, OscillatorNode>;

export function* keyboard() {
  const ctx = new AudioContext();

  yield put(getAnalyzerNode({ analyzerNode: ctx.createAnalyser() }));

  const oscillators: Oscillators = new Map();
  yield all([stroke(ctx, oscillators), release(ctx, oscillators)]);
}

function* stroke(ctx: AudioContext, oscs: Oscillators) {
  while (true) {
    const {
      payload: { id, freq },
    } = (yield take('stroke')) as StrokeAction;

    const { waveform, analyzer } = (yield select()) as State;

    const osc = ctx.createOscillator();
    osc.frequency.value = freq;
    osc.type = waveform;

    if (analyzer !== null) osc.connect(analyzer);
    osc.connect(ctx.destination);

    oscs.set(id, osc);

    osc.start();
  }
}

function* release(ctx: AudioContext, oscs: Oscillators) {
  while (true) {
    const {
      payload: { id },
    } = (yield take('release')) as ReleaseAction;

    const osc = oscs.get(id);
    if (osc !== undefined) {
      osc.stop();

      const { analyzer } = (yield select()) as State;
      if (analyzer != null) osc.disconnect(analyzer);

      osc.disconnect(ctx.destination);
    }
  }
}
