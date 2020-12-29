import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UnisonInput } from '../components';

export const UnisonInputContainer: React.VFC = () => {
  const dispatch = useDispatch();

  const unison = useSelector((state) => state.old.unison);

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: 'updateUnison',
        payload: { count: Number(e.target.value) },
      });
    },
    [dispatch]
  );

  return <UnisonInput unison={unison} changeHandler={changeHandler} />;
};
