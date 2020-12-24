import React, { useCallback, useRef, useState } from 'react';

import styles from './Knob.css';

interface Props {
  initialKnobValue: number;
  nextKnobValue: (val: number) => void;
}

export const Knob: React.VFC<Props> = ({
  initialKnobValue,
  nextKnobValue,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [dragging, setDragging] = useState(false);

  const [knobValue, setKnobValue] = useState(initialKnobValue);

  const mouseDownHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (dragging) return;

      const yCoord = e.screenY;
      setDragging(true);

      const mouseMoveHandler = (e: MouseEvent) => {
        const yDiff = yCoord - e.screenY;
        const draft = knobValue + yDiff / 100;
        const val = draft < 0 ? 0 : draft > 1 ? 1 : draft;
        setKnobValue(val);
        nextKnobValue(val);
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
        transform: `rotate(${knobValue * 280 - 140}deg)`,
      }}
    >
      <div className={styles.knobCenter} />
      <div className={styles.knobMark} />
    </div>
  );
};
