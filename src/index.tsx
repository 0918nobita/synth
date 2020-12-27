import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { DetuneKnob, GainKnob, ReleaseKnob, SustainKnob } from './components';
import {
  DecayKnobContainer,
  KeyboardContainer,
  AttackKnobContainer,
  OscilloscopeContainer,
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
      <AttackKnobContainer />
      <DecayKnobContainer />
      <SustainKnob />
      <ReleaseKnob />
    </div>
    <div className={styles.analyzerAndKeyboard}>
      <div className={styles.selectbox}>
        <WaveformSelectboxContainer />
      </div>
      <div className={styles.analyzer}>
        <OscilloscopeContainer />
      </div>
      <KeyboardContainer />
    </div>
  </Provider>,
  root
);
