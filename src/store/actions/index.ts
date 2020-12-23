import { AnalyzerActions } from './analyzer';
import { CounterActions } from './counter';
import { KeyboardActions } from './keyboard';

export * from './analyzer';
export * from './counter';
export * from './keyboard';

export type Actions = AnalyzerActions | CounterActions | KeyboardActions;

export type ActionTypes = Actions['type'];
