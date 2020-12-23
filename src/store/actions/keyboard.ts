export type KeyboardActions =
  | UpdateWaveformAction
  | StrokeAction
  | ReleaseAction;

export interface UpdateWaveformAction {
  type: 'updateWaveform';
  payload: {
    waveform: 'sine' | 'square' | 'sawtooth' | 'triangle';
  };
}

export const updateWaveform = ({
  waveform,
}: UpdateWaveformAction['payload']): UpdateWaveformAction => ({
  type: 'updateWaveform',
  payload: { waveform },
});

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
