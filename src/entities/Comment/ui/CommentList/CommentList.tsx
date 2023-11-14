import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { ToggleFeature } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
	const { className, comments, isLoading } = props;
	const { t } = useTranslation('profile');
	if (isLoading) {
		return (
			<VStack
				max
				className={classNames('', {}, [className])}
			>
				<CommentCard isLoading />
				<CommentCard isLoading />
				<CommentCard isLoading />
			</VStack>
		);
	}

	return (
		<VStack
			gap="16"
			max
			className={classNames('', {}, [className])}
		>
			{comments?.length ? (
				comments.map((comment) => (
					<CommentCard
						isLoading={isLoading}
						comment={comment}
						key={comment.id}
					/>
				))
			) : (
				<ToggleFeature
					feature="isAppRedesigned"
					on={<Text text={t('Комментарии отсутствуют')} />}
					off={<TextDeprecated text={t('Комментарии отсутствуют')} />}
				/>
			)}
		</VStack>
	);
});
