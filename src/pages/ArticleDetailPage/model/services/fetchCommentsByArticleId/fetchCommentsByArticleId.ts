import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { ProfileValidationErrors } from '@/shared/const/error';

export const fetchCommentsByArticleId = createAsyncThunk<
	Comment[],
	string | undefined,
	ThunkConfig<string>
>('article/fetchCommentsByArticleId', async (articleID, thunkApi) => {
	const { extra, rejectWithValue } = thunkApi;

	if (!articleID) {
		return rejectWithValue('err');
	}

	try {
		const response = await extra.api.get<Comment[]>('/comments', {
			params: {
				articleID,
				_expand: 'user',
			},
		});

		if (!response.data) {
			throw new Error();
		}

		return response.data;
	} catch (e) {
		return rejectWithValue(`${[ProfileValidationErrors.SERVER_ERROR]}`);
	}
});
