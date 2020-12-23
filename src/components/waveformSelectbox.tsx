import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Waveform, waveforms } from '../domains/waveform';
import { updateWaveform } from '../store';

export const WaveformSelectbox: React.VFC = () => {
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(
        updateWaveform({
          waveform: e.target.value as Waveform,
        })
      );
    },
    [dispatch]
  );

  const currentWaveform = useSelector((state) => state.waveform);

  return (
    <select onChange={onChange} value={currentWaveform}>
      {waveforms.map((waveform) => (
        <option key={waveform} value={waveform}>
          {waveform}
        </option>
      ))}
    </select>
  );
};
