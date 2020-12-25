import { Story, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { Keyboard } from '../components';

export const keyboard: Story<unknown> = () => <Keyboard />;

const store = configureStore([])();

const meta: Meta = {
  title: 'Keyboard',
  decorators: [
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    (story): JSX.Element => <Provider store={store}>{story()}</Provider>,
  ],
};

export default meta;
