import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './UnisonInput.css';

export const UnisonKnob: React.VFC = () => {
  const dispatch = useDispatch();

  const unison = useSelector((state) => state.unison);

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: 'updateUnison',
        payload: { count: Number(e.target.value) },
      });
    },
    [dispatch]
  );

  return (
    <div>
      <div className={styles.text}>
        UNISON:&nbsp;
        <input
          className={styles.numberInput}
          type="number"
          value={unison}
          min="1"
          max="8"
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};
