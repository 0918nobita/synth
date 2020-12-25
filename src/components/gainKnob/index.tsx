import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Knob } from '../knob';

import styles from './GainKnob.css';

export const GainKnob: React.VFC = () => {
  const dispatch = useDispatch();

  const [knobValue, setKnobValue] = useState(1);

  const nextKnobValue = useCallback(
    (val) => {
      dispatch({ type: 'updateGain', payload: { rate: val } });
      setKnobValue(val);
    },
    [dispatch]
  );

  return (
    <div>
      <Knob initialKnobValue={1} nextKnobValue={nextKnobValue} step={0.01} />
      <div className={styles.text}>GAIN: {knobValue.toFixed(2)}</div>
    </div>
  );
};
