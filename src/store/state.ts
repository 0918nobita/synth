export interface State {
  count: number;
  waveform: 'sine' | 'square' | 'sawtooth' | 'triangle';
}

export const initialState: State = { count: 0, waveform: 'triangle' };
