import { Reducer } from 'redux';
import { AmplifierActions } from './actions';
import { AmplifierState, initialAmpState } from './state';

export const ampReducer: Reducer<AmplifierState, AmplifierActions> = (
  state: AmplifierState = initialAmpState,
  action
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
