import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';

interface ScrollToTopButtonProps {
	className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
	const { className } = props;
	const onClick = useCallback(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);
	return (
		<Icon
			Svg={CircleIcon}
			width={32}
			height={32}
			clickable
			onClick={onClick}
			className={classNames('', {}, [className])}
		/>
	);
});
