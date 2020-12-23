import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Analyzer from './analyzer';
import Counter from './counter';
import Keyboard from './keyboard';
import { rootSaga } from './sagas';
import { initialState, reducer } from './store';
import WaveformSelectbox from './waveformSelectbox';

const composeEnhancers =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any)?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById('root')!;
ReactDOM.render(
  <Provider store={store}>
    <Analyzer />
    <Counter />
    <WaveformSelectbox />
    <Keyboard />
  </Provider>,
  root
);
