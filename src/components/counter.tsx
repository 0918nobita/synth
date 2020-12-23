import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { countUp, countUpAsync } from '../store';

export const Counter: React.VFC = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const countUpHandler = useCallback(() => {
    dispatch(countUp());
  }, [dispatch]);

  const countUpAsyncHandler = useCallback(() => {
    dispatch(countUpAsync());
  }, [dispatch]);

  return (
    <>
      <button onClick={countUpHandler}>{count}</button>
      <button onClick={countUpAsyncHandler}>Count up in 1sec</button>
    </>
  );
};
