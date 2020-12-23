export interface State {
  waveform: 'sine' | 'square' | 'sawtooth' | 'triangle';
  analyzer: AnalyserNode | null;
}

export const initialState: State = {
  waveform: 'triangle',
  analyzer: null,
};
