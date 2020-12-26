import { Story, Meta } from '@storybook/react';

import { Keyboard } from '../components';

export const keyboard: Story<unknown> = () => {
  const noop = () => void 0;
  return <Keyboard strokeHandler={noop} releaseHandler={noop} />;
};

const meta: Meta = {
  title: 'Keyboard',
};

export default meta;
