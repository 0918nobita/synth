import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NoiseGainKnob } from '../components';

export const NoiseGainKnobContainer: React.VFC = () => {
  const dispatch = useDispatch();
  const noiseGain = useSelector((state) => state.noiseGain);
  const nextKnobValue = useCallback(
    (rate: number) => {
      dispatch({ type: 'updateNoiseGain', payload: { rate } });
    },
    [dispatch]
  );
  return <NoiseGainKnob knobValue={noiseGain} nextKnobValue={nextKnobValue} />;
};
