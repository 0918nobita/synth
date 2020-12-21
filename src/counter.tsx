import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter: React.VFC = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handle = useCallback(() => {
    dispatch({ type: 'countUp' });
  }, [dispatch]);

  return <button onClick={handle}>{count}</button>;
};

export default Counter;
