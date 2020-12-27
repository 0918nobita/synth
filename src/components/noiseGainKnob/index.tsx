import { Knob } from '../knob';

import styles from './NoiseGainKnob.css';

interface Props {
  knobValue: number;
  nextKnobValue: (_: number) => void;
}

export const NoiseGainKnob: React.VFC<Props> = ({
  knobValue,
  nextKnobValue,
}) => (
  <div>
    <Knob
      knobValue={knobValue}
      min={0}
      max={1}
      step={0.01}
      dragSpeed={0.01}
      nextKnobValue={nextKnobValue}
    />
    <div className={styles.text}>NOISE: {knobValue.toFixed(2)}</div>
  </div>
);
