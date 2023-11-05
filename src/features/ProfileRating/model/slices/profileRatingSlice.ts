import { createSlice } from '@reduxjs/toolkit';
import { ProfileRatingSchema } from '../types/profileRatingSchema';

const initialState: ProfileRatingSchema = {};

const profileRatingSlice = createSlice({
	name: 'profileRating',
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

export const { reducer: profileRatingReducer, actions: profileRatingActions } =
	profileRatingSlice;
