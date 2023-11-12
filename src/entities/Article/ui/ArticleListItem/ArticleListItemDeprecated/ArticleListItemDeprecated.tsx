import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleListItemProps } from '../ArticleListItem';

import { Text } from '@/shared/ui/deprecated/Text';
import EyeLogo from '@/shared/assets/icons/eye.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import cls from '../ArticleListItem.module.scss';
import { getRouteArticleDetail } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import {
	ArticleView,
	ArticleBlockType,
} from '../../../model/consts/articleConsts';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';

export const ArticleListItemDeprecated = memo((props: ArticleListItemProps) => {
	const { t } = useTranslation();
	const { className, article, view, target } = props;
	const types = (
		<Text
			text={article.type.join(', ')}
			className={cls.types}
		/>
	);
	const views = (
		<>
			<Text
				text={String(article.views)}
				className={cls.views}
			/>
			<Icon Svg={EyeLogo} />
		</>
	);

	if (view === ArticleView.BIG) {
		const textBlock = article.blocks.find(
			(block) => block.type === ArticleBlockType.TEXT,
		) as ArticleTextBlock;
		return (
			<div
				className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
				data-testid="ArticleListItem"
			>
				<Card className={cls.card}>
					<div className={cls.header}>
						<Avatar
							src={article.user.avatar}
							size={30}
						/>
						<Text
							text={article.user.username}
							className={cls.username}
						/>
						<Text
							text={article.createdAt}
							className={cls.createdAt}
						/>
					</div>
					<Text
						title={article.title}
						className={cls.title}
					/>
					{types}
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
					{textBlock && (
						<ArticleTextBlockComponent
							block={textBlock}
							className={cls.textBlock}
						/>
					)}
					<div className={cls.footer}>
						<AppLink
							to={getRouteArticleDetail(article.id)}
							theme={AppLinkTheme.PRIMARY}
							target={target}
						>
							<Button theme={ThemeButton.OUTLINE}>
								{t('Читать далее...')}
							</Button>
						</AppLink>
						{views}
					</div>
				</Card>
			</div>
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
				theme={AppLinkTheme.PRIMARY}
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
