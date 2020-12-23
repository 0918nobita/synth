import { fork } from 'redux-saga/effects';

import { keyboard } from './keyboard';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export function* rootSaga() {
  yield fork(keyboard);
}
