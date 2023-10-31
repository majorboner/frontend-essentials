import { createSlice } from '@reduxjs/toolkit';
import { ArticleRatingSchema } from '../types/articleRatingSchema';

const initialState: ArticleRatingSchema = {};

const articleRatingSlice = createSlice({
  name: 'articleRating',
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
  reducer: articleRatingReducer,
  actions: articleRatingActions,
} = articleRatingSlice;
