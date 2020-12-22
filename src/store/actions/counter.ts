export type CounterActions = CountUpAction | CountUpAsyncAction;

export interface CountUpAction {
  type: 'countUp';
}

export const countUp = (): CountUpAction => ({ type: 'countUp' });

export interface CountUpAsyncAction {
  type: 'countUpAsync';
}

export const countUpAsync = (): CountUpAsyncAction => ({
  type: 'countUpAsync',
});
