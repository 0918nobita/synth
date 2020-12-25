import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import {
  Analyzer,
  AttackKnob,
  DetuneKnob,
  Keyboard,
  GainKnob,
  UnisonKnob,
  WaveformSelectbox,
} from './components';
import { rootSaga } from './sagas';
import { initialState, reducer } from './store';

import styles from './global.css';

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
    <div className={styles.knobs}>
      <GainKnob />
      <UnisonKnob />
      <DetuneKnob />
      <AttackKnob />
    </div>
    <div className={styles.analyzerAndKeyboard}>
      <div className={styles.selectbox}>
        <WaveformSelectbox />
      </div>
      <div className={styles.analyzer}>
        <Analyzer />
      </div>
      <Keyboard />
    </div>
  </Provider>,
  root
);
