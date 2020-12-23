import { AnalyzerActions } from './analyzer';
import { KeyboardActions } from './keyboard';

export * from './analyzer';
export * from './keyboard';

export type Actions = AnalyzerActions | KeyboardActions;

export type ActionTypes = Actions['type'];
