import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Knob } from './knob';

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
    <>
      <Knob initialKnobValue={0} nextKnobValue={nextKnobValue} step={0.01} />
      <div style={{ userSelect: 'none' }}>detune: {knobValue}</div>
    </>
  );
};
