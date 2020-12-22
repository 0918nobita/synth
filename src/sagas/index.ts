import { all } from 'redux-saga/effects';

import { keyboard } from './keyboard';
import { counter } from './counter';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export function* rootSaga() {
  yield all([keyboard(), counter()]);
}
