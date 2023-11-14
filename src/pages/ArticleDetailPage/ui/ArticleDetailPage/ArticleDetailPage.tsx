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
import { VStack } from '@/shared/ui/redesigned/Stack';
import { articleDetailsPageReducer } from '../../model/slices';
import cls from './ArticleDetailPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailPageComments } from '../ArticleDetailPageComments/ArticleDetailPageComments';
import { ArticleRating } from '@/features/ArticleRating';
import { ToggleFeature } from '@/shared/lib/features';
import { Card } from '@/shared/ui/deprecated/Card';
import { StickyContentLayout } from '@/shared/layouts';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

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

	return (
		<DynamicModuleLoader reducers={reducers}>
			<ToggleFeature
				feature="isAppRedesigned"
				on={
					<StickyContentLayout
						content={
							<Page
								className={classNames(cls.ArticleDetailPage, {}, [className])}
							>
								<VStack
									max
									gap="16"
								>
									<DetailsContainer />
									<ArticleRating articleId={id} />
									<ArticleRecommendationsList />
									<ArticleDetailPageComments id={id} />
								</VStack>
							</Page>
						}
						right={<AdditionalInfoContainer />}
					/>
				}
				off={
					<Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
						<VStack
							max
							gap="16"
						>
							<ArticleDetailsPageHeader />
							<ArticleDetails id={id} />
							<ToggleFeature
								feature="isArticleRatingEnabled"
								on={<ArticleRating articleId={id} />}
								off={<Card>{t('Оценка статей скоро появится')}</Card>}
							/>
							<ArticleRecommendationsList />
							<ArticleDetailPageComments id={id} />
						</VStack>
					</Page>
				}
			/>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailPage);
