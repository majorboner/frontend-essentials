import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { loginReducer } from 'features/AuthByUsername';
import { userReducer } from 'entities/User';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
