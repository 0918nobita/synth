import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { noteNumToFreq } from '../../domains/keyboard';
import { stroke, release } from '../../store';

import styles from './Key.css';

export interface Props {
  kind: 'white' | 'black';
  x: number;
  noteNum: number;
}

export const Key: React.VFC<Props> = ({ kind, x, noteNum }) => {
  const dispatch = useDispatch();

  const [stroked, setStroked] = useState(false);

  const strokeHandler = useCallback(() => {
    if (!stroked)
      dispatch(stroke({ id: noteNum, freq: noteNumToFreq(noteNum) }));
    setStroked(true);
  }, [dispatch, stroked]);

  const releaseHandler = useCallback(() => {
    if (stroked) dispatch(release({ id: noteNum }));
    setStroked(false);
  }, [dispatch, stroked]);

  switch (kind) {
    case 'white':
      return (
        <rect
          className={styles.whiteKey}
          x={x}
          y={0}
          width={30}
          height={110}
          stroke="black"
          strokeWidth={1}
          onMouseDown={strokeHandler}
          onMouseUp={releaseHandler}
          onMouseLeave={releaseHandler}
        />
      );
    case 'black':
      return (
        <rect
          className={styles.blackKey}
          x={x}
          y={0}
          width={18}
          height={67}
          onMouseDown={strokeHandler}
          onMouseUp={releaseHandler}
          onMouseLeave={releaseHandler}
        />
      );
  }
};
