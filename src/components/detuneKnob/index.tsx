import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Knob } from '../knob';

import styles from './DetuneKnob.css';

export const DetuneKnob: React.VFC = () => {
  const dispatch = useDispatch();

  const [knobValue, setKnobValue] = useState(0);

  const nextKnobValue = useCallback(
    (val) => {
      const interval = Math.floor(val * 100);
      dispatch({
        type: 'updateDetune',
        payload: { interval },
      });
      setKnobValue(interval);
    },
    [dispatch]
  );

  return (
    <div>
      <Knob initialKnobValue={0} nextKnobValue={nextKnobValue} step={0.01} />
      <div className={styles.text}>DETUNE: {knobValue}</div>
    </div>
  );
};
