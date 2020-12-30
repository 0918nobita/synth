export type AmplifierActions =
  | UpdateAttackAction
  | UpdateDecayAction
  | UpdateSustainAction
  | UpdateReleaseAction;

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
