import { CounterActions } from './counter';
import { KeyboardActions } from './keyboard';

export * from './counter';
export * from './keyboard';

export type Actions = CounterActions | KeyboardActions;

export type ActionTypes = Actions['type'];
