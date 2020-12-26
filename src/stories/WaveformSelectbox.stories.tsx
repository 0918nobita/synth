import { Story, Meta } from '@storybook/react';
import { useState } from 'react';

import { WaveformSelectbox } from '../components';
import { Waveform } from '../domains/waveform';

/** Mock of containers/waveformSelectbox */
const WaveformSelectboxContainer: React.VFC = () => {
  const [waveform, setWaveform] = useState<Waveform>('triangle');
  return (
    <WaveformSelectbox
      waveform={waveform}
      changeHandler={(e) => {
        setWaveform(e.target.value as Waveform);
      }}
    />
  );
};

export const waveformSelectbox: Story<unknown> = () => (
  <WaveformSelectboxContainer />
);

const meta: Meta = {
  title: 'Waveform Selectbox',
};

export default meta;
