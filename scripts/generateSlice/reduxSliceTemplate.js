module.exports = (componentName) => {
	const lowercasedName =
		componentName[0].toLowerCase() + componentName.slice(1);
	return `import { createSlice } from '@reduxjs/toolkit';
import { ${componentName}Schema } from '../types/${lowercasedName}Schema';

const initialState: ${componentName}Schema = {};

const ${lowercasedName}Slice = createSlice({
  name: '${lowercasedName}',
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
  reducer: ${lowercasedName}Reducer,
  actions: ${lowercasedName}Actions,
} = ${lowercasedName}Slice;
`;
};
