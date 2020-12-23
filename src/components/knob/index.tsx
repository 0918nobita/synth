import React, { useCallback, useRef, useState } from 'react';

import styles from './Knob.css';

interface Props {
  knobValue: number;
  setKnobValue: (val: number) => void;
}

export const Knob: React.VFC<Props> = ({ knobValue, setKnobValue }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [dragging, setDragging] = useState(false);

  const mouseDownHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (dragging) return;

      const yCoord = e.screenY;
      setDragging(true);

      const mouseMoveHandler = (e: MouseEvent) => {
        const yDiff = yCoord - e.screenY;
        const draft = Math.floor(knobValue + yDiff);
        const val = draft < 0 ? 0 : draft > 100 ? 100 : draft;
        setKnobValue(val);
      };

      const mouseUpHandler = () => {
        setDragging(false);
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    },
    [dragging]
  );

  return (
    <div
      ref={ref}
      onMouseDown={mouseDownHandler}
      className={styles.knob}
      style={{
        transform: `rotate(${(knobValue / 100) * 280 - 140}deg)`,
      }}
    >
      <div className={styles.knobCenter} />
      <div className={styles.knobMark} />
    </div>
  );
};
