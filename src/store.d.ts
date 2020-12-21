import 'react-redux';
import { Dispatch, Store } from 'redux';

import { Actions } from './actions';
import { State } from './state';

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends State {}

  export function useDispatch<TDispatch = Dispatch<Actions>>(): TDispatch;

  export function useStore<S = DefaultRootState>(): Store<S, Actions>;
}
