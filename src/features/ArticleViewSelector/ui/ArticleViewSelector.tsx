import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '@/entities/Article';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TilesIconDeprecated from '@/shared/assets/icons/tiled.svg';
import ListIcon from '@/shared/assets/icons/tiled-new.svg';
import TilesIcon from '@/shared/assets/icons/tile.svg';
import {
	Button as ButtonDeprecated,
	ThemeButton,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ToggleFeature, toggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
	className?: string;
	view: ArticleView;
	onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
	{
		view: ArticleView.BIG,
		icon: toggleFeatures({
			name: 'isAppRedesigned',
			on: () => ListIcon,
			off: () => ListIconDeprecated,
		}),
	},
	{
		view: ArticleView.SMALL,
		icon: toggleFeatures({
			name: 'isAppRedesigned',
			on: () => TilesIcon,
			off: () => TilesIconDeprecated,
		}),
	},
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
	const { className, view, onViewClick } = props;

	const onClick = (newView: ArticleView) => () => {
		onViewClick?.(newView);
	};

	return (
		<ToggleFeature
			feature="isAppRedesigned"
			on={
				<Card
					className={classNames(cls.ArticleViewSelectorRedesigned, {}, [
						className,
					])}
					border="round"
				>
					<HStack
						gap="8"
						justify="center"
					>
						{viewTypes.map((viewType) => (
							<Icon
								clickable
								onClick={onClick(viewType.view)}
								Svg={viewType.icon}
								className={classNames(
									'',
									{ [cls.selected]: viewType.view === view },
									[],
								)}
							/>
						))}
					</HStack>
				</Card>
			}
			off={
				<div className={classNames(cls.ArticleViewSelector, {}, [className])}>
					{viewTypes.map((viewType) => (
						<ButtonDeprecated
							key={viewType.view}
							theme={ThemeButton.CLEAR}
							onClick={onClick(viewType.view)}
						>
							<IconDeprecated
								Svg={viewType.icon}
								className={classNames(
									'',
									{ [cls.selected]: viewType.view === view },
									[],
								)}
								width={24}
								height={24}
							/>
						</ButtonDeprecated>
					))}
				</div>
			}
		/>
	);
});
