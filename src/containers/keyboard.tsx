import { useDispatch } from 'react-redux';

import { Keyboard, Props as KeyboardProps } from '../components';
import { stroke, release } from '../store';

export const KeyboardContainer: React.VFC = () => {
  const dispatch = useDispatch();

  const strokeHandler: KeyboardProps['strokeHandler'] = ({ id, freq }) => {
    dispatch(stroke({ id, freq }));
  };

  const releaseHandler: KeyboardProps['releaseHandler'] = (id) => {
    dispatch(release({ id }));
  };

  return (
    <Keyboard strokeHandler={strokeHandler} releaseHandler={releaseHandler} />
  );
};
