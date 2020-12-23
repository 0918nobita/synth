import { all, select, take } from 'redux-saga/effects';

import { State, StrokeAction, ReleaseAction } from '../store';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

type Oscillators = Map<number, OscillatorNode>;

export function* keyboard() {
  const ctx = new AudioContext();
  const oscillators: Oscillators = new Map<number, OscillatorNode>();
  yield all([stroke(ctx, oscillators), release(oscillators)]);
}

function* stroke(ctx: AudioContext, oscs: Oscillators) {
  while (true) {
    const {
      payload: { id, freq },
    } = (yield take('stroke')) as StrokeAction;

    const osc = ctx.createOscillator();
    osc.frequency.value = freq;
    osc.type = ((yield select()) as State).waveform;
    osc.connect(ctx.destination);
    oscs.set(id, osc);
    osc.start();
  }
}

function* release(oscs: Oscillators) {
  while (true) {
    const {
      payload: { id },
    } = (yield take('release')) as ReleaseAction;

    const osc = oscs.get(id);
    if (osc !== undefined) osc.stop();
  }
}
