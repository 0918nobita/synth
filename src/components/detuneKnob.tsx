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
        payload: { interval: Math.floor(val * 100) },
      });
      setKnobValue(val);
    },
    [dispatch]
  );

  return (
    <>
      <Knob knobValue={knobValue} setKnobValue={setKnobValueAndDispatch} />
      <div style={{ userSelect: 'none' }}>
        detune: {Math.floor(knobValue * 100)}
      </div>
    </>
  );
};
