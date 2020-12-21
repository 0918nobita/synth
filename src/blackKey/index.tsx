import { useCallback } from 'react';
import webAudioContext from '../webAudioContext';

import styles from './BlackKey.css';

interface Props {
  freq: number;
}

const BlackKey: React.FC<Props> = ({ freq }) => {
  const ctx = webAudioContext;

  const handler = useCallback(() => {
    const osc = ctx.createOscillator();
    osc.frequency.value = freq;
    osc.connect(ctx.destination);
    osc.start();
    setTimeout(() => {
      osc.stop();
    }, 1000);
  }, []);

  return <button onClick={handler} className={styles.blackKey} />;
};

export default BlackKey;
