import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading,
  } = props;
  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.map((comment) => <CommentCard isLoading={isLoading} className={cls.comment} comment={comment} />)}
    </div>
  );
});
