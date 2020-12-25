import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Knob } from '../knob';

import styles from './ReleaseKnob.css';

export const ReleaseKnob: React.VFC = () => {
  const dispatch = useDispatch();

  const [knobValue, setKnobValue] = useState(0);

  const nextKnobValue = useCallback(
    (val) => {
      dispatch({
        type: 'updateRelease',
        payload: { period: val },
      });
      setKnobValue(val);
    },
    [dispatch]
  );

  return (
    <div>
      <Knob initialKnobValue={0} nextKnobValue={nextKnobValue} step={0.01} />
      <div className={styles.text}>RELEASE: {knobValue.toFixed(2)}</div>
    </div>
  );
};
