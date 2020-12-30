import { AmplifierActions } from './amplifier/actions';
import { KeyboardActions } from './keyboard/actions';
import { OscillatorActions } from './oscillator/actions';
import { OscilloscopeActions } from './oscilloscope/actions';

export * from './amplifier/actions';
export * from './keyboard/actions';
export * from './oscillator/actions';
export * from './oscilloscope/actions';

export type Actions =
  | OscillatorActions
  | AmplifierActions
  | OscilloscopeActions
  | KeyboardActions;
