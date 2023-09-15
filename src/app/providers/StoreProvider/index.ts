import type { StateSchema, ReduxStoreWithManager, ThunkConfig } from '../../../../StateSchema';
import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
  StoreProvider,
  StateSchema,
  // ReduxStoreWithManager,
  AppDispatch,
  createReduxStore,
  ThunkConfig,
};
