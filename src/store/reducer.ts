import { combineReducers } from 'redux';

import { ampReducer } from './amplifier/reducer';
import { oscillatorReducer } from './oscillator/reducer';
import { oscilloscopeReducer } from './oscilloscope/reducer';

export const reducer = combineReducers({
  oscillator: oscillatorReducer,
  amplifier: ampReducer,
  oscilloscope: oscilloscopeReducer,
});
