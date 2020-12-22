import {
  AllEffect,
  ForkEffect,
  all,
  delay,
  put,
  takeEvery,
} from 'redux-saga/effects';

import { Actions, ActionTypes } from './store';

type RootSaga = Generator<
  AllEffect<Generator<WatchAsyncActionEffect, void, unknown>>,
  void,
  unknown
>;
export function* rootSaga(): RootSaga {
  yield all([helloSaga(), watchAsyncAction()]);
}

type HelloSaga = Generator<never, void, unknown>;
// eslint-disable-next-line require-yield
export function* helloSaga(): HelloSaga {
  console.log('Hello, redux-saga!');
}

type CountUpAsync = Generator<unknown, void, unknown>;
export function* countUpAsync(): CountUpAsync {
  yield delay(1000);
  yield put<Actions>({ type: 'countUp' });
}

type WatchAsyncActionEffect = ForkEffect<never>;
type WatchAsyncAction = Generator<WatchAsyncActionEffect, void, unknown>;
export function* watchAsyncAction(): WatchAsyncAction {
  yield takeEvery<ActionTypes>('countUpAsync', countUpAsync);
}
