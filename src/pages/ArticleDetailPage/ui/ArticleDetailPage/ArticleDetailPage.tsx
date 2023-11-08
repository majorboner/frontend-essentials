import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { VStack } from '@/shared/ui/Stack';
import { articleDetailsPageReducer } from '../../model/slices';
import cls from './ArticleDetailPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailPageComments } from '../ArticleDetailPageComments/ArticleDetailPageComments';
import { ArticleRating } from '@/features/ArticleRating';
import { toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';

interface ArticleDetailPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
	const { className } = props;
	const { t } = useTranslation('articles');
	const { id } = useParams<{ id: string }>();
	if (!id) {
		return null;
	}

	const articleRatingCard = toggleFeatures({
		name: 'isArticleRatingEnabled',
		on: () => <ArticleRating articleId={id} />,
		off: () => <Card>{t('Оценка статей в разработчке')}</Card>,
	});

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
				<VStack
					max
					gap="16"
				>
					<ArticleDetailsPageHeader />
					<ArticleDetails id={id} />
					{articleRatingCard}
					<ArticleRecommendationsList />
					<ArticleDetailPageComments id={id} />
				</VStack>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailPage);
