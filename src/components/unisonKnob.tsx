import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Knob } from './knob';

export const UnisonKnob: React.VFC = () => {
  const dispatch = useDispatch();

  const [knobValue, setKnobValue] = useState(12.5);

  const setKnobValueAndDispatch = useCallback(
    (val) => {
      dispatch({
        type: 'updateUnison',
        payload: { count: Math.floor((val / 100) * 8) },
      });
      setKnobValue(val);
    },
    [dispatch]
  );

  return (
    <>
      <Knob knobValue={knobValue} setKnobValue={setKnobValueAndDispatch} />
      <div style={{ userSelect: 'none' }}>
        unison: {Math.floor((knobValue / 100) * 8)}
      </div>
    </>
  );
};