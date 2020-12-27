import { AnalyzerActions } from './analyzer';
import { KeyboardActions } from './keyboard';
import { OscillatorActions } from './oscillator';

export * from './analyzer';
export * from './keyboard';
export * from './oscillator';

export type Actions = AnalyzerActions | KeyboardActions | OscillatorActions;

export type ActionTypes = Actions['type'];
