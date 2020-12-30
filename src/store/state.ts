import { AmplifierState } from './amplifier/state';
import { OscillatorState } from './oscillator/state';
import { OscilloscopeState } from './oscilloscope/state';

export interface State {
  oscillator: OscillatorState;
  amplifier: AmplifierState;
  oscilloscope: OscilloscopeState;
}
