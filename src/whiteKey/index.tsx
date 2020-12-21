import classNames from 'classnames';
import { useCallback, useState } from 'react';

import webAudioContext from '../webAudioContext';

import styles from './WhiteKey.css';

interface Props {
  first?: boolean;
  freq: number;
}

const WhiteKey: React.VFC<Props> = ({ first, freq }) => {
  const ctx = webAudioContext;

  const [osc, setOsc] = useState<OscillatorNode | null>(null);

  const stroke = useCallback(() => {
    const newOsc = ctx.createOscillator();
    newOsc.frequency.value = freq;
    newOsc.connect(ctx.destination);
    newOsc.start();
    setOsc(newOsc);
  }, [osc]);

  const release = useCallback(() => {
    if (osc === null) return;
    osc.stop();
  }, [osc]);

  return (
    <button
      onMouseDown={stroke}
      onMouseUp={release}
      onMouseLeave={release}
      className={classNames(styles.whiteKey, { [styles.leftEnd]: !!first })}
    />
  );
};

export default WhiteKey;
