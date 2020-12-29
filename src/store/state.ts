export interface State {
  oscillator: OscillatorState;
  amplifier: AmplifierState;
  oscilloscope: OscilloscopeState;
}

export interface OscillatorState {
  waveform: 'sine' | 'square' | 'sawtooth' | 'triangle';
  gain: number;
  unison: number;
  detune: number;
  noiseGain: number;
}

export const initialOscillatorState: OscillatorState = {
  waveform: 'triangle',
  gain: 1,
  unison: 1,
  detune: 0,
  noiseGain: 0,
};

export interface AmplifierState {
  attack: number;
  decay: number;
  sustain: number;
  release: number;
}

export const initialAmpState: AmplifierState = {
  attack: 0,
  decay: 0,
  sustain: 1,
  release: 0,
};

export interface OscilloscopeState {
  analyserNode: AnalyserNode | null;
}

export const initialOscilloscopeState: OscilloscopeState = {
  analyserNode: null,
};
