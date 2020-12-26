import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import {
  Analyzer,
  AttackKnob,
  DetuneKnob,
  GainKnob,
  DecayKnob,
  SustainKnob,
  ReleaseKnob,
} from './components';
import {
  KeyboardContainer,
  UnisonInputContainer,
  WaveformSelectboxContainer,
} from './containers';
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
      <UnisonInputContainer />
      <DetuneKnob />
    </div>
    <div className={styles.knobs}>
      <AttackKnob />
      <DecayKnob />
      <SustainKnob />
      <ReleaseKnob />
    </div>
    <div className={styles.analyzerAndKeyboard}>
      <div className={styles.selectbox}>
        <WaveformSelectboxContainer />
      </div>
      <div className={styles.analyzer}>
        <Analyzer />
      </div>
      <KeyboardContainer />
    </div>
  </Provider>,
  root
);
