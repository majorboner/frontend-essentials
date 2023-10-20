import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { scrollRestorationSchema } from '../types/scrollRestorationSchema';

const initialState: scrollRestorationSchema = {
  scroll: {

  },
};

export const scrollRestorationSlice = createSlice({
  name: 'scrollRestoration',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: scrollRestorationActions } = scrollRestorationSlice;
export const { reducer: scrollRestorationReducers } = scrollRestorationSlice;
