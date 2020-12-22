import Key from '../key';
import WhiteKey from '../whiteKey';
import BlackKey from '../blackKey';

import styles from './Keyboard.css';

const Keyboard: React.VFC = () => (
  <div className={styles.keyboard}>
    <Key>
      <WhiteKey id={0} first freq={261.626} />
      <BlackKey id={1} freq={277.183} />
    </Key>
    <Key>
      <WhiteKey id={2} freq={293.665} />
      <BlackKey id={3} freq={311.127} />
    </Key>
    <Key>
      <WhiteKey id={4} freq={329.628} />
    </Key>
    <Key>
      <WhiteKey id={5} freq={349.228} />
      <BlackKey id={6} freq={369.994} />
    </Key>
    <Key>
      <WhiteKey id={7} freq={391.995} />
      <BlackKey id={8} freq={415.305} />
    </Key>
    <Key>
      <WhiteKey id={9} freq={440} />
      <BlackKey id={10} freq={466.164} />
    </Key>
    <Key>
      <WhiteKey id={11} freq={493.883} />
    </Key>
  </div>
);

export default Keyboard;
