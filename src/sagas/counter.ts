import { delay, put, takeEvery } from 'redux-saga/effects';

import { ActionTypes, countUp } from '../store';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export function* counter() {
  yield takeEvery<ActionTypes>('countUpAsync', countUpAsync);
}

function* countUpAsync() {
  yield delay(1000);
  yield put(countUp());
}
