import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Waveform } from '../domains/waveform';
import { WaveformSelectbox } from '../components';
import { updateWaveform } from '../store';

export const WaveformSelectboxContainer: React.VFC = () => {
  const dispatch = useDispatch();

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(
        updateWaveform({
          waveform: e.target.value as Waveform,
        })
      );
    },
    [dispatch]
  );

  const waveform = useSelector((state) => state.waveform);

  return (
    <WaveformSelectbox waveform={waveform} changeHandler={changeHandler} />
  );
};
