import { fork } from 'redux-saga/effects';

import { keyboard } from './keyboard';
import { midi } from './midi';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export function* rootSaga() {
  yield fork(keyboard);
  yield fork(midi);
}
