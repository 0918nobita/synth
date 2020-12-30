export type OscillatorActions =
  | UpdateGainAction
  | UpdateUnisonAction
  | UpdateDetuneAction
  | UpdateWaveformAction
  | UpdateNoiseGainAction;

export interface UpdateGainAction {
  type: 'updateGain';
  payload: {
    rate: number;
  };
}

export interface UpdateUnisonAction {
  type: 'updateUnison';
  payload: {
    count: number;
  };
}

export interface UpdateDetuneAction {
  type: 'updateDetune';
  payload: {
    interval: number;
  };
}

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

export interface UpdateNoiseGainAction {
  type: 'updateNoiseGain';
  payload: {
    rate: number;
  };
}
