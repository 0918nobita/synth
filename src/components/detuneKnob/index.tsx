import { Knob } from '../knob';

import styles from './DetuneKnob.css';

interface Props {
  knobValue: number;
  nextKnobValue: (_: number) => void;
}

export const DetuneKnob: React.VFC<Props> = ({ knobValue, nextKnobValue }) => (
  <div>
    <Knob
      knobValue={knobValue}
      min={0}
      max={10}
      step={0.2}
      dragSpeed={0.04}
      nextKnobValue={nextKnobValue}
    />
    <div className={styles.text}>DETUNE: {knobValue.toFixed(1)}</div>
  </div>
);
