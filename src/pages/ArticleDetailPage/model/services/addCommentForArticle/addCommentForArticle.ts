import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import i18n from '@/shared/config/i18n/i18n';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleDetailsData } from '@/entities/Article';

export const addCommentForArticle = createAsyncThunk<
	Comment,
	string,
	ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkApi) => {
	const { extra, dispatch, rejectWithValue, getState } = thunkApi;

	const userData = getUserAuthData(getState());
	const article = getArticleDetailsData(getState());

	if (!userData || !text || !article) {
		return rejectWithValue('no data');
	}

	try {
		const response = await extra.api.post<Comment>('/comments', {
			articleId: article?.id,
			userId: userData.id,
			text,
		});
		if (!response.data) {
			throw new Error();
		}

		dispatch(fetchCommentsByArticleId(article.id));

		return response.data;
	} catch (e) {
		return rejectWithValue(i18n.t('Ошибка'));
	}
});
