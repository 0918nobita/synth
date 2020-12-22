export type KeyboardActions = StrokeAction | ReleaseAction;

export interface StrokeAction {
  type: 'stroke';
  payload: {
    id: number;
    freq: number;
  };
}

type StrokeActionCreator = (_: { id: number; freq: number }) => StrokeAction;
export const stroke: StrokeActionCreator = ({ id, freq }) => ({
  type: 'stroke',
  payload: { id, freq },
});

export interface ReleaseAction {
  type: 'release';
  payload: {
    id: number;
  };
}

type ReleaseActionCreator = (_: { id: number }) => ReleaseAction;
export const release: ReleaseActionCreator = ({ id }) => ({
  type: 'release',
  payload: { id },
});
