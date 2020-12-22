export type CounterActions = CountUpAction | CountUpAsyncAction;

export interface CountUpAction {
  type: 'countUp';
}

export interface CountUpAsyncAction {
  type: 'countUpAsync';
}
