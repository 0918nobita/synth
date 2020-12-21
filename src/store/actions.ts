export type Actions = CountUpAction | CountUpAsyncAction;

interface CountUpAction {
  type: 'countUp';
}

interface CountUpAsyncAction {
  type: 'countUpAsync';
}
