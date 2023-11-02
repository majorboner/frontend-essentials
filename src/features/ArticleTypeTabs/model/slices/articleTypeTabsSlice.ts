import { createSlice } from '@reduxjs/toolkit';
import { ArticleTypeTabsSchema } from '../types/articleTypeTabsSchema';

const initialState: ArticleTypeTabsSchema = {};

const articleTypeTabsSlice = createSlice({
  name: 'articleTypeTabs',
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
  reducer: articleTypeTabsReducer,
  actions: articleTypeTabsActions,
} = articleTypeTabsSlice;
