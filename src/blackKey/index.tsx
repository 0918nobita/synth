import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './BlackKey.css';

interface Props {
  id: number;
  freq: number;
}

const BlackKey: React.VFC<Props> = ({ id, freq }) => {
  const dispatch = useDispatch();

  const [stroked, setStroked] = useState(false);

  const stroke = useCallback(() => {
    if (!stroked) dispatch({ type: 'stroke', payload: { id, freq } });
    setStroked(true);
  }, [dispatch, stroked]);

  const release = useCallback(() => {
    if (stroked) dispatch({ type: 'release', payload: { id } });
    setStroked(false);
  }, [dispatch, stroked]);

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
