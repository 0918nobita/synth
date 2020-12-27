import { KnobV2 } from '../knobV2';

import styles from './DetuneKnob.css';

interface Props {
  knobValue: number;
  nextKnobValue: (_: number) => void;
}

export const DetuneKnob: React.VFC<Props> = ({ knobValue, nextKnobValue }) => (
  <div>
    <KnobV2
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
