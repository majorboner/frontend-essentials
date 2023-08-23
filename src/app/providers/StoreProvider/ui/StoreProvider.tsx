import { ReactNode } from 'react';
import { Provider } from 'react-redux';
// import { createReduxStore } from '../config/store';
// import { StateSchema } from '../config/StateSchema';
import store from '../config/store';

interface StoreProviderProps {
  children: ReactNode;
  // initialState?: StateSchema;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    // initialState,
  } = props;

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
