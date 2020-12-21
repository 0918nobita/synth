import { useCallback } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

import Keyboard from './keyboard';
import { initialState, reducer } from './store';

const store = createStore(
  reducer,
  initialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any)?.__REDUX_DEVTOOLS_EXTENSION__()
);

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
