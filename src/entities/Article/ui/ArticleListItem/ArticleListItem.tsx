import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import { ToggleFeature } from '@/shared/lib/features';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

export interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => (
	<ToggleFeature
		feature="isAppRedesigned"
		on={<ArticleListItemRedesigned {...props} />}
		off={<ArticleListItemDeprecated {...props} />}
	/>
));
