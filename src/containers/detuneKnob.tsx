import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DetuneKnob } from '../components';

export const DetuneKnobContainer: React.VFC = () => {
  const dispatch = useDispatch();
  const detune = useSelector((state) => state.detune);
  const nextKnobValue = useCallback(
    (interval: number) => {
      dispatch({ type: 'updateDetune', payload: { interval } });
    },
    [dispatch]
  );
  return <DetuneKnob knobValue={detune} nextKnobValue={nextKnobValue} />;
};
