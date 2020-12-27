import { KeyboardActions } from './keyboard';
import { OscillatorActions } from './oscillator';
import { OscilloscopeActions } from './oscilloscope';

export * from './keyboard';
export * from './oscillator';
export * from './oscilloscope';

export type Actions = KeyboardActions | OscillatorActions | OscilloscopeActions;

export type ActionTypes = Actions['type'];
