import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { ToggleFeature } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

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
				<ToggleFeature
					feature="isAppRedesigned"
					on={
						<>
							<Text
								size="size-l"
								title={t('Рекомендации')}
							/>
							<ArticleList
								articles={articles}
								target="_blank"
							/>
						</>
					}
					off={
						<>
							<TextDeprecated
								size={TextSize.L}
								title={t('Рекомендации')}
							/>
							<ArticleList
								articles={articles}
								target="_blank"
							/>
						</>
					}
				/>
			</VStack>
		);
	},
);
