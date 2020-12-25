import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Knob } from '../knob';

import styles from './SustainKnob.css';

export const SustainKnob: React.VFC = () => {
  const dispatch = useDispatch();

  const [knobValue, setKnobValue] = useState(1);

  const nextKnobValue = useCallback(
    (val) => {
      dispatch({
        type: 'updateSustain',
        payload: { volume: val },
      });
      setKnobValue(val);
    },
    [dispatch]
  );

  return (
    <div>
      <Knob initialKnobValue={1} nextKnobValue={nextKnobValue} step={0.01} />
      <div className={styles.text}>SUSTAIN: {knobValue.toFixed(2)}</div>
    </div>
  );
};
