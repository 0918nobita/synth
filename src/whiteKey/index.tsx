import classNames from 'classnames';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styles from './WhiteKey.css';

interface Props {
  id: number;
  first?: boolean;
  freq: number;
}

const WhiteKey: React.VFC<Props> = ({ id, first, freq }) => {
  const dispatch = useDispatch();

  const stroke = useCallback(() => {
    dispatch({ type: 'stroke', payload: { id, freq } });
  }, [dispatch]);

  const release = useCallback(() => {
    dispatch({ type: 'release', payload: { id } });
  }, [dispatch]);

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
