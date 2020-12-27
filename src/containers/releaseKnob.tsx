import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReleaseKnob } from '../components';

export const ReleaseKnobContainer: React.VFC = () => {
  const dispatch = useDispatch();
  const release = useSelector((state) => state.release);
  const nextKnobValue = useCallback(
    (period: number) => {
      dispatch({ type: 'updateRelease', payload: { period } });
    },
    [dispatch]
  );
  return <ReleaseKnob knobValue={release} nextKnobValue={nextKnobValue} />;
};
