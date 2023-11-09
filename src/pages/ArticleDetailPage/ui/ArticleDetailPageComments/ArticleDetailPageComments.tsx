import { useTranslation } from 'react-i18next';
import { Suspense, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/addCommentForm';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';

interface ArticleDetailPageCommentsProps {
	id?: string;
}

export const ArticleDetailPageComments = memo(
	(props: ArticleDetailPageCommentsProps) => {
		const { t } = useTranslation('articles');
		const { id } = props;
		const dispatch = useAppDispatch();
		const comments = useSelector(getArticleComments.selectAll);
		const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

		const onSendComment = useCallback(
			(text: string) => {
				dispatch(addCommentForArticle(text));
			},
			[dispatch],
		);

		useInitialEffect(() => {
			dispatch(fetchCommentsByArticleId(id));
		});

		return (
			<VStack
				gap="16"
				max
			>
				<Text
					size={TextSize.L}
					title={t('Комментарии')}
				/>
				<Suspense fallback={<Loader />}>
					<AddCommentForm onSendComment={onSendComment} />
				</Suspense>
				<CommentList
					isLoading={commentsIsLoading}
					comments={comments}
				/>
			</VStack>
		);
	},
);
