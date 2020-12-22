export type Actions = CountUpAction | CountUpAsyncAction;

export type ActionTypes = Actions['type'];

interface CountUpAction {
  type: 'countUp';
}

interface CountUpAsyncAction {
  type: 'countUpAsync';
}
