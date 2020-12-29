import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SustainKnob } from '../components';

export const SustainKnobContainer: React.VFC = () => {
  const dispatch = useDispatch();
  const sustain = useSelector((state) => state.old.sustain);
  const nextKnobValue = useCallback(
    (volume: number) => {
      dispatch({ type: 'updateSustain', payload: { volume } });
    },
    [dispatch]
  );
  return <SustainKnob knobValue={sustain} nextKnobValue={nextKnobValue} />;
};
