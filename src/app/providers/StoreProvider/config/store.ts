import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

const rootReducers: ReducersMapObject<StateSchema> = {
  counter: counterReducer,
  user: userReducer,
};

const reducerManager = createReducerManager(rootReducers);

const store = configureStore({
  reducer: reducerManager.reduce,
  devTools: __IS_DEV__,
  // preloadedState: initialState,
});

// @ts-ignore
store.reducerManager = reducerManager;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;
