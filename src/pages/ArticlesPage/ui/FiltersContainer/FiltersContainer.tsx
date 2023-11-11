import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

export const FiltersContainer = memo(() => {
	const {
		onChangeOrder,
		onChangeSearch,
		onChangeSort,
		onChangeType,
		order,
		search,
		sort,
		type,
	} = useArticlesFilters();
	return (
		<ArticlesFilters
			onChangeOrder={onChangeOrder}
			onChangeSearch={onChangeSearch}
			onChangeSort={onChangeSort}
			onChangeType={onChangeType}
			order={order}
			search={search}
			sort={sort}
			type={type}
		/>
	);
});
