import { all, delay, put, take, takeEvery } from 'redux-saga/effects';

import {
  Actions,
  ActionTypes,
  CountUpAction,
  StrokeAction,
  ReleaseAction,
} from './store';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export function* rootSaga() {
  yield all([keyboard(), watchAsyncAction()]);
}

export function* countUpAsync() {
  yield take(({ type }: Actions) => type === 'countUpAsync');
  yield delay(1000);
  yield put<CountUpAction>({ type: 'countUp' });
}

export function* watchAsyncAction() {
  yield takeEvery<ActionTypes>('countUpAsync', countUpAsync);
}

type Oscillators = Map<number, OscillatorNode>;

export function* keyboard() {
  const ctx = new AudioContext();
  const oscillators: Oscillators = new Map<number, OscillatorNode>();
  yield all([stroke(ctx, oscillators), release(oscillators)]);
}

export function* stroke(ctx: AudioContext, oscs: Oscillators) {
  while (true) {
    const {
      payload: { id, freq },
    } = (yield take(({ type }: Actions) => type === 'stroke')) as StrokeAction;

    const osc = ctx.createOscillator();
    osc.frequency.value = freq;
    osc.connect(ctx.destination);
    oscs.set(id, osc);
    osc.start();
  }
}

export function* release(oscs: Oscillators) {
  while (true) {
    const {
      payload: { id },
    } = (yield take(
      ({ type }: Actions) => type === 'release'
    )) as ReleaseAction;

    const osc = oscs.get(id);
    if (osc !== undefined) osc.stop();
  }
}
