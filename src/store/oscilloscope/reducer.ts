import { Reducer } from 'redux';

import { OscilloscopeActions } from './actions';
import { OscilloscopeState, initialOscilloscopeState } from './state';

export const oscilloscopeReducer: Reducer<
  OscilloscopeState,
  OscilloscopeActions
> = (
  state: OscilloscopeState = initialOscilloscopeState,
  action
): OscilloscopeState => {
  switch (action.type) {
    case 'getAnalyserNode':
      return { ...state, analyserNode: action.payload.analyserNode };
    default:
      return state;
  }
};
