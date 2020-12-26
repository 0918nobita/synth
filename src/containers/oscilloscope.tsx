import { useSelector } from 'react-redux';

import { Oscilloscope } from '../components';

export const OscilloscopeContainer: React.VFC = () => {
  const analyserNode = useSelector((state) => state.analyzer);
  return <>{analyserNode && <Oscilloscope analyserNode={analyserNode} />}</>;
};
