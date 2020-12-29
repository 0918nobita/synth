import { Reducer, combineReducers } from 'redux';

import { Actions } from './actions';
import { OldState, State, initialState } from './state';

export const oldReducer: Reducer<OldState, Actions> = (
  state: OldState = initialState,
  action: Actions
): OldState => {
  switch (action.type) {
    case 'getAnalyserNode':
      return { ...state, analyzer: action.payload.analyserNode };
    case 'updateGain':
      return { ...state, gain: action.payload.rate };
    case 'updateUnison':
      return { ...state, unison: action.payload.count };
    case 'updateDetune':
      return { ...state, detune: action.payload.interval };
    case 'updateWaveform':
      return { ...state, waveform: action.payload.waveform };
    case 'updateAttack':
      return { ...state, attack: action.payload.period };
    case 'updateDecay':
      return { ...state, decay: action.payload.period };
    case 'updateSustain':
      return { ...state, sustain: action.payload.volume };
    case 'updateRelease':
      return { ...state, release: action.payload.period };
    case 'updateNoiseGain':
      return { ...state, noiseGain: action.payload.rate };
    default:
      return state;
  }
};

export const reducer: Reducer<State, Actions> = combineReducers({
  old: oldReducer,
});
