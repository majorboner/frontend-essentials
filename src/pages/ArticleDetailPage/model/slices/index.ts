import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailPageSchema } from '../types';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer =
	combineReducers<ArticleDetailPageSchema>({
		recommendations: articleDetailsPageRecommendationsReducer,
		comments: articleDetailsCommentsReducer,
	});
