import { useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Keyboard from './keyboard';
import { initialState, reducer } from './store';

const composeEnhancers =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any)?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// eslint-disable-next-line require-yield
function* rootSaga() {
  console.log('Hello, redux-saga!');
}

sagaMiddleware.run(rootSaga);

const Counter: React.VFC = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handle = useCallback(() => {
    dispatch({ type: 'countUp' });
  }, [dispatch]);

  return <button onClick={handle}>{count}</button>;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById('root')!;
ReactDOM.render(
  <Provider store={store}>
    <Counter />
    <Keyboard />
  </Provider>,
  root
);
