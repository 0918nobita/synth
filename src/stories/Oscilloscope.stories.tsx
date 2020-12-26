import { Story, Meta } from '@storybook/react';

import { Oscilloscope } from '../components';

/** Mock of containers/oscilloscope */
const OscilloscopeContainer: React.VFC = () => {
  const ctx = new AudioContext();
  const analyserNode = ctx.createAnalyser();
  return <Oscilloscope analyserNode={analyserNode} />;
};

export const oscilloscope: Story<unknown> = () => <OscilloscopeContainer />;

const meta: Meta = {
  title: 'Oscilloscope',
};

export default meta;
