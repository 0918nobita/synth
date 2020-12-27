import { KnobV2 } from '../knobV2';

import styles from './GainKnob.css';

interface Props {
  knobValue: number;
  nextKnobValue: (_: number) => void;
}

export const GainKnob: React.VFC<Props> = ({ knobValue, nextKnobValue }) => (
  <div>
    <KnobV2
      knobValue={knobValue}
      min={0}
      max={2}
      step={0.02}
      dragSpeed={0.02}
      nextKnobValue={nextKnobValue}
    />
    <div className={styles.text}>GAIN: {knobValue.toFixed(2)}</div>
  </div>
);
