export const waveforms = ['sine', 'square', 'sawtooth', 'triangle'] as const;

export type Waveform = typeof waveforms[number];
