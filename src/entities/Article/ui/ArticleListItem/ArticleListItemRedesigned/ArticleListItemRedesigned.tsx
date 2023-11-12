import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemRedesigned.module.scss';
import { ArticleListItemProps } from '../ArticleListItem';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import {
	ArticleBlockType,
	ArticleView,
} from '../../../model/consts/articleConsts';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { ArticleTextBlock } from '../../../model/types/article';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetail } from '@/shared/const/router';
import EyeLogo from '@/shared/assets/icons/eye-new.svg';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
	const { t } = useTranslation();
	const { className, article, view, target } = props;
	const types = (
		<Text
			text={article.type.join(', ')}
			className={cls.types}
		/>
	);
	const views = (
		<HStack>
			<Text
				text={String(article.views)}
				className={cls.views}
			/>
			<Icon Svg={EyeLogo} />
		</HStack>
	);

	if (view === ArticleView.BIG) {
		const textBlock = article.blocks.find(
			(block) => block.type === ArticleBlockType.TEXT,
		) as ArticleTextBlock;
		return (
			<Card
				className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
				data-testid="ArticleListItem"
			>
				<VStack
					max
					gap="8"
				>
					<HStack className={cls.header}>
						<Avatar
							src={article.user.avatar}
							size={32}
						/>
						<Text
							text={article.user.username}
							bold
						/>
						<Text text={article.createdAt} />
					</HStack>
					<Text title={article.title} />
					<Text
						title={article.subtitle}
						size="size-s"
					/>
					<AppImage
						src={article.img}
						alt={article.title}
						className={cls.img}
						fallback={
							<Skeleton
								width={200}
								height={200}
							/>
						}
					/>
					{textBlock?.paragraphs && (
						<Text
							text={textBlock.paragraphs.slice(0, 2).join(' ')}
							className={cls.text}
						/>
					)}
					<HStack
						max
						justify="between"
					>
						<AppLink
							to={getRouteArticleDetail(article.id)}
							variant="primary"
							target={target}
						>
							<Button variant="outline">{t('Читать далее...')}</Button>
						</AppLink>
						{views}
					</HStack>
				</VStack>
			</Card>
		);
	}
	return (
		<div
			className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
			data-testid="ArticleListItem"
		>
			<AppLink
				target={target}
				to={getRouteArticleDetail(article.id)}
				variant="primary"
			>
				<Card className={cls.card}>
					<div className={cls.imageWrapper}>
						<AppImage
							src={article.img}
							alt="s"
							className={cls.img}
							fallback={
								<Skeleton
									width="100%"
									height={250}
								/>
							}
						/>
						<Text
							text={article.createdAt}
							className={cls.date}
						/>
					</div>
					<div className={cls.infoWrapper}>
						{types}
						{views}
					</div>
					<Text
						text={article.title}
						className={cls.title}
					/>
				</Card>
			</AppLink>
		</div>
	);
});
