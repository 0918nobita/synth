import React, { useCallback, useState } from 'react';

interface Props {
  initialKnobValue: number;
  nextKnobValue: (val: number) => void;
  step: number;
}

export const Knob: React.VFC<Props> = ({
  initialKnobValue,
  nextKnobValue,
  step,
}: Props) => {
  const [dragging, setDragging] = useState(false);

  const [focused, setFocused] = useState(false);

  const [knobValue, setKnobValue] = useState(initialKnobValue);

  const mouseDownHandler = useCallback(
    (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
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

  const focusHandler = useCallback(() => {
    setFocused(true);
  }, [setFocused]);

  const blurHandler = useCallback(() => {
    setFocused(false);
  }, [setFocused]);

  const keydownHandler = useCallback(
    (e: React.KeyboardEvent<SVGSVGElement>) => {
      if (!focused) return;

      if (e.key === 'Up' || e.key === 'ArrowUp') {
        const draft = knobValue + step;
        const val = draft < 0 ? 0 : draft > 1 ? 1 : draft;
        setKnobValue(val);
        nextKnobValue(val);
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      if (e.key === 'Down' || e.key === 'ArrowDown') {
        const draft = knobValue - step;
        const val = draft < 0 ? 0 : draft > 1 ? 1 : draft;
        setKnobValue(val);
        nextKnobValue(val);
        e.preventDefault();
        e.stopPropagation();
        return;
      }
    },
    [focused, knobValue]
  );

  return (
    <svg
      width={45}
      height={45}
      viewBox={[-100, -100, 200, 200].join(', ')}
      tabIndex={0}
      onMouseDown={mouseDownHandler}
      onFocus={focusHandler}
      onBlur={blurHandler}
      onKeyDown={keydownHandler}
    >
      <g style={{ transform: `rotate(${knobValue * 280 - 140}deg)` }}>
        <circle
          cx={0}
          cy={0}
          r={90}
          strokeWidth={12}
          stroke="rgb(122, 122, 122)"
          fill="rgb(43, 43, 43)"
        />
        <line x1={0} y1={-90} x2={0} y2={-35} stroke="white" strokeWidth={10} />
      </g>
    </svg>
  );
};
