import { Reducer } from 'redux';

import { OscillatorActions } from './actions';
import { OscillatorState, initialOscillatorState } from './state';

export const oscillatorReducer: Reducer<OscillatorState, OscillatorActions> = (
  state: OscillatorState = initialOscillatorState,
  action
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
