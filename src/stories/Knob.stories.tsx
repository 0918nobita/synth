import { Meta, Story } from '@storybook/react';

import { Knob, Props } from '../components/knob';

export default {
  title: 'Knob',
  component: Knob,
} as Meta;

const Template: Story<Props> = (args) => <Knob {...args} />;

export const knob = Template.bind({});
knob.args = {
  initialKnobValue: 0,
  nextKnobValue: () => void 0,
  step: 0.01,
};
