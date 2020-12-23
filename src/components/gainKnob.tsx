import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Knob } from './knob';

export const GainKnob: React.VFC = () => {
  const dispatch = useDispatch();

  const [knobValue, setKnobValue] = useState(1);

  const setKnobValueAndDispatch = useCallback(
    (val) => {
      dispatch({ type: 'updateGain', payload: { rate: val } });
      setKnobValue(val);
    },
    [dispatch]
  );

  return (
    <>
      <Knob knobValue={knobValue} setKnobValue={setKnobValueAndDispatch} />
      <div style={{ userSelect: 'none' }}>gain: {knobValue.toFixed(2)}</div>
    </>
  );
};
