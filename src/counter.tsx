import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter: React.VFC = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const countUp = useCallback(() => {
    dispatch({ type: 'countUp' });
  }, [dispatch]);

  const countUpAsync = useCallback(() => {
    dispatch({ type: 'countUpAsync' });
  }, [dispatch]);

  return (
    <>
      <button onClick={countUp}>{count}</button>
      <button onClick={countUpAsync}>Count up in 1sec</button>
    </>
  );
};

export default Counter;
