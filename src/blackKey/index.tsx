import { useCallback, useState } from 'react';
import webAudioContext from '../webAudioContext';

import styles from './BlackKey.css';

interface Props {
  freq: number;
}

const BlackKey: React.VFC<Props> = ({ freq }) => {
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
    if (!osc) return;
    osc.stop();
  }, [osc]);

  return (
    <button
      onMouseDown={stroke}
      onMouseUp={release}
      onMouseLeave={release}
      className={styles.blackKey}
    />
  );
};

export default BlackKey;
