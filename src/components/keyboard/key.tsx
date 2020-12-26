import { useCallback, useState } from 'react';

import { noteNumToFreq } from '../../domains/keyboard';

import styles from './Key.css';

export interface Props {
  kind: 'white' | 'black';
  x: number;
  noteNum: number;
  strokeHandler: (_: { id: number; freq: number }) => void;
  releaseHandler: (id: number) => void;
}

export const Key: React.VFC<Props> = ({
  kind,
  x,
  noteNum,
  strokeHandler,
  releaseHandler,
}) => {
  const [stroked, setStroked] = useState(false);

  const onStroke = useCallback(() => {
    if (!stroked) strokeHandler({ id: noteNum, freq: noteNumToFreq(noteNum) });
    setStroked(true);
  }, [stroked]);

  const onRelease = useCallback(() => {
    if (stroked) releaseHandler(noteNum);
    setStroked(false);
  }, [stroked]);

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
          onMouseDown={onStroke}
          onMouseUp={onRelease}
          onMouseLeave={onRelease}
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
          onMouseDown={onStroke}
          onMouseUp={onRelease}
          onMouseLeave={onRelease}
        />
      );
  }
};
