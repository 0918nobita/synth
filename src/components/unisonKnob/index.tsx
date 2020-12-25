import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Knob } from '../knob';

import styles from './UnisonKnob.css';

export const UnisonKnob: React.VFC = () => {
  const dispatch = useDispatch();

  const [knobValue, setKnobValue] = useState(1);

  const setKnobValueAndDispatch = useCallback(
    (val) => {
      const count = Math.floor(val * 8);
      dispatch({
        type: 'updateUnison',
        payload: { count },
      });
      setKnobValue(count);
    },
    [dispatch]
  );

  return (
    <div>
      <Knob
        initialKnobValue={0.125}
        nextKnobValue={setKnobValueAndDispatch}
        step={0.125}
      />
      <div className={styles.text}>UNISON: {knobValue}</div>
    </div>
  );
};
