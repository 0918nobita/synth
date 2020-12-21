import classNames from 'classnames';
import { useCallback } from 'react';

import webAudioContext from '../webAudioContext';

import styles from './WhiteKey.css';

interface Props {
  first?: boolean;
  freq: number;
}

const WhiteKey: React.VFC<Props> = ({ first, freq }) => {
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

  return (
    <button
      onClick={handler}
      className={
        classNames(
          styles.whiteKey,
          { [styles.leftEnd]: !!first })}
    />
  );
};

export default WhiteKey;
