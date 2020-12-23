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
    case 'updateWaveform':
      return { ...state, waveform: action.payload.waveform };
    default:
      return state;
  }
};
