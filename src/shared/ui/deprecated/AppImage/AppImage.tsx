import {
	ImgHTMLAttributes,
	ReactNode,
	memo,
	useLayoutEffect,
	useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
	fallback?: ReactNode;
	errorFallback?: ReactNode;
}

/**
 * Устарело, используем новые компоненты из папки redesigned!
 * @deprecated
 */

export const AppImage = memo((props: AppImageProps) => {
	const {
		className,
		fallback,
		errorFallback,
		src,
		alt = 'image',
		...otherProps
	} = props;

	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useLayoutEffect(() => {
		const img = new Image();
		img.src = src ?? '';
		img.onload = () => {
			setIsLoading(false);
		};
		img.onerror = () => {
			setIsError(true);
		};
	}, [src]);

	if (isLoading && fallback) {
		return fallback;
	}

	if (isError && errorFallback) {
		return errorFallback;
	}

	return (
		<img
			className={className}
			alt={alt}
			src={src}
			{...otherProps}
		/>
	);
});
