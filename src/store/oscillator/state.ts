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
