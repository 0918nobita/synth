export interface State {
  old: OldState;
  oscilloscope: OscilloscopeState;
}

export interface OscilloscopeState {
  analyserNode: AnalyserNode | null;
}

export const initialOscilloscopeState: OscilloscopeState = {
  analyserNode: null,
};

export interface OldState {
  waveform: 'sine' | 'square' | 'sawtooth' | 'triangle';
  gain: number;
  unison: number;
  detune: number;
  attack: number;
  decay: number;
  sustain: number;
  release: number;
  noiseGain: number;
}

export const initialOldState: OldState = {
  waveform: 'triangle',
  gain: 1,
  unison: 1,
  detune: 0,
  attack: 0,
  decay: 0,
  sustain: 1,
  release: 0,
  noiseGain: 0,
};
