export type KeyboardActions = StrokeAction | ReleaseAction;

export interface StrokeAction {
  type: 'stroke';
  payload: {
    id: number;
    freq: number;
  };
}

export const stroke = ({
  id,
  freq,
}: StrokeAction['payload']): StrokeAction => ({
  type: 'stroke',
  payload: { id, freq },
});

export interface ReleaseAction {
  type: 'release';
  payload: {
    id: number;
  };
}

export const release = ({ id }: ReleaseAction['payload']): ReleaseAction => ({
  type: 'release',
  payload: { id },
});
