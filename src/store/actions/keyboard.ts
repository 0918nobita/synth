export type KeyboardActions = StrokeAction | ReleaseAction;

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
