import { Story, Meta } from '@storybook/react';
import { useEffect, useState } from 'react';

import { KnobV2 } from '../components/knobV2';

interface Props {
  initialValue: number;
  min: number;
  max: number;
  step: number;
  dragSpeed: number;
}

const KnobContainer: React.VFC<Props> = ({
  initialValue,
  min,
  max,
  step,
  dragSpeed,
}) => {
  const [knobValue, setKnobValue] = useState(initialValue);

  useEffect(() => {
    setKnobValue(initialValue);
  }, [initialValue]);

  return (
    <KnobV2
      knobValue={knobValue}
      min={min}
      max={max}
      dragSpeed={dragSpeed}
      step={step}
      nextKnobValue={setKnobValue}
    />
  );
};

export const knob: Story<Props> = (props) => {
  return <KnobContainer {...props} />;
};

const meta: Meta = {
  title: 'Knob',
  args: {
    initialValue: 0,
    min: 0,
    max: 1,
    step: 0.01,
    dragSpeed: 0.01,
  },
  argTypes: {
    initialValue: { control: { type: 'number' } },
  },
};

export default meta;
