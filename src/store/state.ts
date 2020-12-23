export interface State {
  count: number;
  waveform: 'sine' | 'square' | 'sawtooth' | 'triangle';
  analyzer: AnalyserNode | null;
}

export const initialState: State = {
  count: 0,
  waveform: 'triangle',
  analyzer: null,
};
