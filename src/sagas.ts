import {
  AllEffect,
  CallEffect,
  ForkEffect,
  PutEffect,
  all,
  delay,
  put,
  takeEvery,
} from 'redux-saga/effects';
import { Actions } from './store';

export function* rootSaga(): Generator<
  AllEffect<Generator<ForkEffect<never>, void, unknown>>,
  void,
  unknown
> {
  yield all([helloSaga(), watchAsyncAction()]);
}

// eslint-disable-next-line require-yield
export function* helloSaga(): Generator<never, void, unknown> {
  console.log('Hello, redux-saga!');
}

export function* countUpAsync(): Generator<
  CallEffect<true> | PutEffect<Actions>,
  void,
  unknown
> {
  yield delay(1000);
  yield put({ type: 'countUp' });
}

export function* watchAsyncAction(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery('countUpAsync', countUpAsync);
}
