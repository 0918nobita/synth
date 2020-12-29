export interface State {
  old: OldState;
}

export interface OldState {
  waveform: 'sine' | 'square' | 'sawtooth' | 'triangle';
  analyzer: AnalyserNode | null;
  gain: number;
  unison: number;
  detune: number;
  attack: number;
  decay: number;
  sustain: number;
  release: number;
  noiseGain: number;
}

export const initialState: OldState = {
  waveform: 'triangle',
  analyzer: null,
  gain: 1,
  unison: 1,
  detune: 0,
  attack: 0,
  decay: 0,
  sustain: 1,
  release: 0,
  noiseGain: 0,
};
