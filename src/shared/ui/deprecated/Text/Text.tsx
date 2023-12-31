import { memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
	PRIMARY = 'primary',
	INVERTED = 'inverted',
	ERROR = 'error',
}

export enum TextAlign {
	LEFT = 'left',
	RIGHT = 'right',
	CENTER = 'center',
}

export enum TextSize {
	S = 'size-s',
	M = 'size-m',
	L = 'size-l',
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const sizeToHeaderTag: Record<TextSize, HeaderTagType> = {
	[TextSize.S]: 'h3',
	[TextSize.M]: 'h2',
	[TextSize.L]: 'h1',
};

interface TextProps {
	className?: string;
	title?: string;
	text?: string;
	theme?: TextTheme;
	align?: TextAlign;
	size?: TextSize;
}

/**
 * Устарело, используем новые компоненты из папки redesigned!
 * @deprecated
 */

export const Text = memo((props: TextProps) => {
	const {
		className,
		text,
		title,
		align = TextAlign.LEFT,
		theme = TextTheme.PRIMARY,
		size = TextSize.M,
	} = props;

	const mods: Mods = {
		[cls[theme]]: true,
		[cls[align]]: true,
		[cls[size]]: true,
	};

	const HeaderTag = sizeToHeaderTag[size];

	return (
		<div className={classNames(cls.Text, mods, [className])}>
			{title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
});
