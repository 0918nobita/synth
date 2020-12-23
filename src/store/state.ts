export interface State {
  waveform: 'sine' | 'square' | 'sawtooth' | 'triangle';
  analyzer: AnalyserNode | null;
  gain: number;
  unison: number;
}

export const initialState: State = {
  waveform: 'triangle',
  analyzer: null,
  gain: 1,
  unison: 1,
};
