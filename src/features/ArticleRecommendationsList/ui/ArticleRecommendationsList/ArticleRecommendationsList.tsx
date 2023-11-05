import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text, TextSize } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
	className?: string;
}

export const ArticleRecommendationsList = memo(
	(props: ArticleRecommendationsListProps) => {
		const { t } = useTranslation('articles');
		const { className } = props;
		const {
			isLoading,
			data: articles,
			error,
		} = useArticleRecommendationsList(3);

		if (isLoading || error) {
			return null;
		}

		return (
			<VStack
				gap="16"
				className={classNames('', {}, [className])}
				data-testid="ArticleRecommendationsList"
			>
				<Text
					size={TextSize.L}
					title={t('Рекомендации')}
				/>
				<ArticleList
					articles={articles}
					target="_blank"
				/>
			</VStack>
		);
	},
);
