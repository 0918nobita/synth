export interface State {
  waveform: 'sine' | 'square' | 'sawtooth' | 'triangle';
  analyzer: AnalyserNode | null;
  gain: number;
  unison: number;
  detune: number;
  attack: number;
}

export const initialState: State = {
  waveform: 'triangle',
  analyzer: null,
  gain: 1,
  unison: 1,
  detune: 0,
  attack: 0,
};
