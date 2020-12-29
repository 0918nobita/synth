import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DecayKnob } from '../components';

export const DecayKnobContainer: React.VFC = () => {
  const dispatch = useDispatch();
  const decay = useSelector((state) => state.old.decay);
  const nextKnobValue = useCallback(
    (period: number) => {
      dispatch({ type: 'updateDecay', payload: { period } });
    },
    [dispatch]
  );
  return <DecayKnob knobValue={decay} nextKnobValue={nextKnobValue} />;
};
