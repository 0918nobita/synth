import Key from '../key';
import WhiteKey from '../whiteKey';
import BlackKey from '../blackKey';

import styles from './Keyboard.css';

const Keyboard: React.VFC = () => (
  <div className={styles.keyboard}>
    <Key>
      <WhiteKey first freq={261.626} />
      <BlackKey freq={277.183} />
    </Key>
    <Key>
      <WhiteKey freq={293.665} />
      <BlackKey freq={311.127} />
    </Key>
    <Key>
      <WhiteKey freq={329.628} />
    </Key>
    <Key>
      <WhiteKey freq={349.228} />
      <BlackKey freq={369.994} />
    </Key>
    <Key>
      <WhiteKey freq={391.995} />
      <BlackKey freq={415.305} />
    </Key>
    <Key>
      <WhiteKey freq={440} />
      <BlackKey freq={466.164} />
    </Key>
    <Key>
      <WhiteKey freq={493.883} />
    </Key>
  </div>
);

export default Keyboard;
