import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [reducerKey in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps {

  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children?: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps): ReactNode => {
  const {
    children,
    reducers,
    removeAfterUnmount,
  } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([reducerKey, reducer]) => {
      store.reducerManager.add(reducerKey as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${reducerKey} reducer` });
    });
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerKey]) => {
          store.reducerManager.remove(reducerKey as StateSchemaKey);
          dispatch({ type: `@DESTROY ${reducers} reducer` });
        });
      }
    };
  }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);

  return (
    children
  );
};
