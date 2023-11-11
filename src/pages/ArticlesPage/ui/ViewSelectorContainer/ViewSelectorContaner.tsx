import { memo } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

export const ViewSelectorContaner = memo(() => {
	const { onChangeView, view } = useArticlesFilters();

	return (
		<ArticleViewSelector
			view={view}
			onViewClick={onChangeView}
		/>
	);
});
