import { useCallback, useState } from 'react';

interface Props {
  knobValue: number;
  min: number;
  max: number;
  step: number;
  dragSpeed: number;
  nextKnobValue: (_: number) => void;
}

const limitToWithinRange = ({
  val,
  min,
  max,
}: {
  val: number;
  min: number;
  max: number;
}) => (val < min ? min : val > max ? max : val);

const toConstMul = ({
  val,
  multiplier,
}: {
  val: number;
  multiplier: number;
}) => {
  return Math.floor(val / multiplier) * multiplier;
};

export const Knob: React.VFC<Props> = ({
  knobValue,
  min,
  max,
  step,
  dragSpeed,
  nextKnobValue,
}) => {
  const [dragging, setDragging] = useState(false);

  const [focused, setFocused] = useState(false);

  const mouseDownHandler = useCallback(
    (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      if (dragging) return;
      const yCoord = e.screenY;
      setDragging(true);
      const mouseMoveHandler = (e: MouseEvent) => {
        const yDiff = yCoord - e.screenY;
        const draft =
          knobValue + toConstMul({ val: yDiff * dragSpeed, multiplier: step });
        const val = limitToWithinRange({ val: draft, min, max });
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
        const val = limitToWithinRange({ val: draft, min, max });
        nextKnobValue(val);
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      if (e.key === 'Down' || e.key === 'ArrowDown') {
        const draft = knobValue - step;
        const val = limitToWithinRange({ val: draft, min, max });
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
      <g
        style={{
          transform: `rotate(${(knobValue / (max - min)) * 280 - 140}deg)`,
        }}
      >
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
