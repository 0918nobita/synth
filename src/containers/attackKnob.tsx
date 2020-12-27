import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AttackKnob } from '../components';

export const AttackKnobContainer: React.VFC = () => {
  const dispatch = useDispatch();
  const attack = useSelector((state) => state.attack);
  const nextKnobValue = useCallback(
    (period: number) => {
      dispatch({ type: 'updateAttack', payload: { period } });
    },
    [dispatch]
  );
  return <AttackKnob knobValue={attack} nextKnobValue={nextKnobValue} />;
};
