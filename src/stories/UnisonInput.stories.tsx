import { Story, Meta } from '@storybook/react';
import { useState } from 'react';

import { UnisonInput } from '../components';

/** Mock of containers/unisonInput */
const UnisonInputContainer: React.VFC = () => {
  const [unison, setUnison] = useState(1);
  return (
    <UnisonInput
      unison={unison}
      changeHandler={(e) => {
        setUnison(Number(e.target.value));
      }}
    />
  );
};

export const unisonInput: Story<unknown> = () => <UnisonInputContainer />;

const meta: Meta = {
  title: 'Unison Input',
};

export default meta;
