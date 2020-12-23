import { Reducer } from 'redux';

import { Actions } from './actions';
import { State, initialState } from './state';

export const reducer: Reducer<State, Actions> = (
  state: State = initialState,
  action: Actions
): State => {
  switch (action.type) {
    case 'getAnalyzerNode':
      return { ...state, analyzer: action.payload.analyzerNode };
    case 'updateGain':
      return { ...state, gain: action.payload.rate };
    case 'updateUnison':
      return { ...state, unison: action.payload.count };
    case 'updateDetune':
      return { ...state, detune: action.payload.interval };
    case 'updateWaveform':
      return { ...state, waveform: action.payload.waveform };
    default:
      return state;
  }
};
