import { Reducer, combineReducers } from 'redux';

import { Actions, OscillatorActions, OscilloscopeActions } from './actions';
import {
  AmplifierState,
  OscillatorState,
  OscilloscopeState,
  State,
  initialAmpState,
  initialOscilloscopeState,
  initialOscillatorState,
} from './state';

export const oscillatorReducer: Reducer<OscillatorState, OscillatorActions> = (
  state: OscillatorState = initialOscillatorState,
  action: OscillatorActions
): OscillatorState => {
  switch (action.type) {
    case 'updateGain':
      return { ...state, gain: action.payload.rate };
    case 'updateUnison':
      return { ...state, unison: action.payload.count };
    case 'updateDetune':
      return { ...state, detune: action.payload.interval };
    case 'updateWaveform':
      return { ...state, waveform: action.payload.waveform };
    case 'updateNoiseGain':
      return { ...state, noiseGain: action.payload.rate };
    default:
      return state;
  }
};

export const ampReducer: Reducer<AmplifierState, Actions> = (
  state: AmplifierState = initialAmpState,
  action: Actions
): AmplifierState => {
  switch (action.type) {
    case 'updateAttack':
      return { ...state, attack: action.payload.period };
    case 'updateDecay':
      return { ...state, decay: action.payload.period };
    case 'updateSustain':
      return { ...state, sustain: action.payload.volume };
    case 'updateRelease':
      return { ...state, release: action.payload.period };
    default:
      return state;
  }
};

export const oscilloscopeReducer: Reducer<
  OscilloscopeState,
  OscilloscopeActions
> = (
  state: OscilloscopeState = initialOscilloscopeState,
  action: OscilloscopeActions
): OscilloscopeState => {
  switch (action.type) {
    case 'getAnalyserNode':
      return { ...state, analyserNode: action.payload.analyserNode };
    default:
      return state;
  }
};

export const reducer: Reducer<State, Actions> = combineReducers({
  oscillator: oscillatorReducer,
  amplifier: ampReducer,
  oscilloscope: oscilloscopeReducer,
});
