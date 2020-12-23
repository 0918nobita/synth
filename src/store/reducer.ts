import { Reducer } from 'redux';

import { Actions } from './actions';
import { State, initialState } from './state';

export const reducer: Reducer<State, Actions> = (
  state: State = initialState,
  action: Actions
): State => {
  switch (action.type) {
    case 'countUp':
      return { ...state, count: state.count + 1 };
    case 'updateWaveform':
      return { ...state, waveform: action.payload.waveform };
    default:
      return state;
  }
};
