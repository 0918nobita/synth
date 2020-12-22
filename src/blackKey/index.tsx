import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styles from './BlackKey.css';

interface Props {
  id: number;
  freq: number;
}

const BlackKey: React.VFC<Props> = ({ id, freq }) => {
  const dispatch = useDispatch();

  const stroke = useCallback(() => {
    dispatch({ type: 'stroke', payload: { id, freq } });
  }, [dispatch]);

  const release = useCallback(() => {
    dispatch({ type: 'release', payload: { id } });
  }, [dispatch]);

  return (
    <button
      onMouseDown={stroke}
      onMouseUp={release}
      onMouseLeave={release}
      className={styles.blackKey}
    />
  );
};

export default BlackKey;
