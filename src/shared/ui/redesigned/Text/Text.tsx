import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'left' | 'right' | 'center';

export type TextSize = 'size-s' | 'size-m' | 'size-l';

type HeaderTagType = 'h1' | 'h2' | 'h3';

const sizeToHeaderTag: Record<TextSize, HeaderTagType> = {
	'size-s': 'h3',
	'size-m': 'h2',
	'size-l': 'h1',
};

interface TextProps {
	className?: string;
	title?: string;
	text?: string;
	variant?: TextVariant;
	align?: TextAlign;
	size?: TextSize;
}

export const Text = memo((props: TextProps) => {
	const {
		className,
		text,
		title,
		align = 'left',
		variant = 'primary',
		size = 'size-m',
	} = props;

	const HeaderTag = sizeToHeaderTag[size];
	const additionalClasses = [className, cls[variant], cls[align], cls[size]];

	return (
		<div className={classNames(cls.Text, {}, additionalClasses)}>
			{title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
});
