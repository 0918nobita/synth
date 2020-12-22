export type Actions =
  | CountUpAction
  | CountUpAsyncAction
  | StrokeAction
  | ReleaseAction;

export type ActionTypes = Actions['type'];

export interface CountUpAction {
  type: 'countUp';
}

export interface CountUpAsyncAction {
  type: 'countUpAsync';
}

export interface StrokeAction {
  type: 'stroke';
  payload: {
    id: number;
    freq: number;
  };
}

export interface ReleaseAction {
  type: 'release';
  payload: {
    id: number;
  };
}
