import { createSlice } from '@reduxjs/toolkit';
import { ArticleSortSelectorSchema } from '../types/articleSortSelectorSchema';

const initialState: ArticleSortSelectorSchema = {};

const articleSortSelectorSlice = createSlice({
	name: 'articleSortSelector',
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
	reducer: articleSortSelectorReducer,
	actions: articleSortSelectorActions,
} = articleSortSelectorSlice;
