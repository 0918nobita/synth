import { Story, Meta } from '@storybook/react';

import { Knob, Props } from '../components/knob';

export const knob: Story<Props> = () => (
  <Knob initialKnobValue={0} nextKnobValue={() => void 0} step={0.01} />
);

const meta: Meta = {
  title: 'Knob',
};

export default meta;
