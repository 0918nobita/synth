import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Knob } from './knob';

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
    <>
      <Knob initialKnobValue={1} nextKnobValue={nextKnobValue} step={0.01} />
      <div style={{ userSelect: 'none' }}>gain: {knobValue.toFixed(2)}</div>
    </>
  );
};
