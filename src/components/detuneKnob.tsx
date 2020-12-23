import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Knob } from './knob';

export const DetuneKnob: React.VFC = () => {
  const dispatch = useDispatch();

  const [knobValue, setKnobValue] = useState(0);

  const setKnobValueAndDispatch = useCallback(
    (val) => {
      dispatch({
        type: 'updateDetune',
        payload: { interval: val },
      });
      setKnobValue(val);
    },
    [dispatch]
  );

  return (
    <>
      <Knob knobValue={knobValue} setKnobValue={setKnobValueAndDispatch} />
      <div style={{ userSelect: 'none' }}>detune: {knobValue}</div>
    </>
  );
};
