import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import StarIcon from '@/shared/assets/icons/star.svg';
import cls from './StarRating.module.scss';
import { Icon } from '../../redesigned/Icon';
import { Icon as IconDeprecated } from '../Icon';
import { ToggleFeature, toggleFeatures } from '@/shared/lib/features';

interface StarRatingProps {
	className?: string;
	onSelect?: (startCount: number) => void;
	size?: number;
	selectedStars?: number;
}

const stars: number[] = [1, 2, 3, 4, 5];

/**
 * Устарело, используем новые компоненты из папки redesigned!
 * @deprecated
 */

export const StarRating = memo((props: StarRatingProps) => {
	const { className, onSelect, size = 30, selectedStars = 0 } = props;
	// const [isHovered, setIsHovered] = useState(false);
	const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
	const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

	const onHover = (starsCount: number) => () => {
		if (!isSelected) {
			setCurrentStarsCount(starsCount);
		}
	};

	const onLeave = () => {
		if (!isSelected) {
			setCurrentStarsCount(0);
		}
	};

	const onClick = (starsCount: number) => () => {
		if (!isSelected) {
			onSelect?.(starsCount);
			setCurrentStarsCount(starsCount);
			setIsSelected(true);
		}
	};

	return (
		<div
			className={classNames(
				toggleFeatures({
					name: 'isAppRedesigned',
					on: () => cls.StarRatingRedesigned,
					off: () => cls.StarRating,
				}),
				{},
				[className],
			)}
		>
			{stars.map((starNumber) => {
				const props = {
					key: starNumber,
					Svg: StarIcon,
					height: size,
					width: size,
					className: classNames(cls.starIcon, { [cls.selected]: isSelected }, [
						currentStarsCount >= starNumber ? cls.hovered : cls.normal,
					]),
					onMouseEnter: onHover(starNumber),
					onMouseLeave: onLeave,
					onClick: onClick(starNumber),
					'data-testid': `StarRating.${starNumber}`,
					'data-selected': currentStarsCount >= starNumber,
				};
				return (
					<ToggleFeature
						feature="isArticleRatingEnabled"
						on={
							<Icon
								clickable={!isSelected}
								{...props}
							/>
						}
						off={<IconDeprecated {...props} />}
					/>
				);
			})}
		</div>
	);
});
