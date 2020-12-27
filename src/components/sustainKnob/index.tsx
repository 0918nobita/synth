import { KnobV2 } from '../knobV2';

import styles from './SustainKnob.css';

interface Props {
  knobValue: number;
  nextKnobValue: (_: number) => void;
}

export const SustainKnob: React.VFC<Props> = ({ knobValue, nextKnobValue }) => (
  <div>
    <KnobV2
      knobValue={knobValue}
      min={0}
      max={1}
      step={0.01}
      dragSpeed={0.01}
      nextKnobValue={nextKnobValue}
    />
    <div className={styles.text}>SUSTAIN: {knobValue.toFixed(2)}</div>
  </div>
);
