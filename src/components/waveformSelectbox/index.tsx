import { Waveform, waveforms } from '../../domains/waveform';

import styles from './WaveformSelectbox.css';

interface Props {
  waveform: Waveform;
  changeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const WaveformSelectbox: React.VFC<Props> = ({
  waveform,
  changeHandler,
}) => (
  <select
    className={styles.selectbox}
    onChange={changeHandler}
    value={waveform}
  >
    {waveforms.map((waveform) => (
      <option key={waveform} value={waveform}>
        {waveform}
      </option>
    ))}
  </select>
);
