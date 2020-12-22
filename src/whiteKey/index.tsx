import classNames from 'classnames';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './WhiteKey.css';

interface Props {
  id: number;
  first?: boolean;
  freq: number;
}

const WhiteKey: React.VFC<Props> = ({ id, first, freq }) => {
  const dispatch = useDispatch();

  const [stroked, setStroked] = useState(false);

  const stroke = useCallback(() => {
    if (!stroked) dispatch({ type: 'stroke', payload: { id, freq } });
    setStroked(true);
  }, [dispatch, stroked]);

  const release = useCallback(() => {
    if (stroked) dispatch({ type: 'release', payload: { id } });
    setStroked(false);
  }, [dispatch, stroked]);

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
