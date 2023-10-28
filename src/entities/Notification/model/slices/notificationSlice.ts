import { createSlice } from '@reduxjs/toolkit';
import { NotificationSchema } from '../types/notificationSchema';

const initialState: NotificationSchema = {
  description: '',
  id: '',
  title: '',
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchArticlesList.pending, (state, action) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(fetchArticlesList.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(fetchArticlesList.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const {
  reducer: notificationReducer,
  actions: notificationActions,
} = notificationSlice;
