import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GainKnob } from '../components';

export const GainKnobContainer: React.VFC = () => {
  const dispatch = useDispatch();
  const gain = useSelector((state) => state.oscillator.gain);
  const nextKnobValue = useCallback(
    (rate: number) => {
      dispatch({ type: 'updateGain', payload: { rate } });
    },
    [dispatch]
  );
  return <GainKnob knobValue={gain} nextKnobValue={nextKnobValue} />;
};
