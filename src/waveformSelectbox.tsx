import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateWaveform } from './store';

const WaveformSelectbox: React.VFC = () => {
  const waveforms = ['sine', 'square', 'sawtooth', 'triangle'];

  const dispatch = useDispatch();

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(
        updateWaveform({
          waveform: e.target.value as
            | 'sine'
            | 'square'
            | 'sawtooth'
            | 'triangle',
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

export default WaveformSelectbox;
