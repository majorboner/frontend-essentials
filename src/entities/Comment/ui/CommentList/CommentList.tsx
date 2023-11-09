import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
	const { className, comments, isLoading } = props;

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
			max
			className={classNames('', {}, [className])}
		>
			{comments?.map((comment) => (
				<CommentCard
					key={comment.id}
					isLoading={isLoading}
					className={cls.comment}
					comment={comment}
					data-testid="CommentList"
				/>
			))}
		</VStack>
	);
});
