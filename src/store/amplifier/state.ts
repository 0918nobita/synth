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
