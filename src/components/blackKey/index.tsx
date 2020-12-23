import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { release, stroke } from '../../store';

import styles from './BlackKey.css';

interface Props {
  id: number;
  freq: number;
}

export const BlackKey: React.VFC<Props> = ({ id, freq }) => {
  const dispatch = useDispatch();

  const [stroked, setStroked] = useState(false);

  const strokeHandler = useCallback(() => {
    if (!stroked) dispatch(stroke({ id, freq }));
    setStroked(true);
  }, [dispatch, stroked]);

  const releaseHandler = useCallback(() => {
    if (stroked) dispatch(release({ id }));
    setStroked(false);
  }, [dispatch, stroked]);

  return (
    <button
      onMouseDown={strokeHandler}
      onMouseUp={releaseHandler}
      onMouseLeave={releaseHandler}
      className={styles.blackKey}
    />
  );
};
