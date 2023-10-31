import { createSlice } from '@reduxjs/toolkit';
import { RatingSchema } from '../types/ratingSchema';

const initialState: RatingSchema = {};

const ratingSlice = createSlice({
  name: 'rating',
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
  reducer: ratingReducer,
  actions: ratingActions,
} = ratingSlice;
