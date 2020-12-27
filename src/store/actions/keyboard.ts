export type KeyboardActions =
  | UpdateAttackAction
  | UpdateDecayAction
  | UpdateSustainAction
  | UpdateReleaseAction
  | StrokeAction
  | ReleaseAction;

export interface UpdateAttackAction {
  type: 'updateAttack';
  payload: {
    period: number;
  };
}

export interface UpdateDecayAction {
  type: 'updateDecay';
  payload: {
    period: number;
  };
}

export interface UpdateSustainAction {
  type: 'updateSustain';
  payload: {
    volume: number;
  };
}

export interface UpdateReleaseAction {
  type: 'updateRelease';
  payload: {
    period: number;
  };
}

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
