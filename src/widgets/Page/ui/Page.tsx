import { MutableRefObject, ReactNode, UIEvent, memo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
	getScrollRestorationByPath,
	scrollRestorationActions,
} from '@/features/scrollRestoration';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';
import { TestProps } from '@/shared/types/tests';
import { toggleFeatures } from '@/shared/lib/features';

interface PageProps extends TestProps {
	className?: string;
	children: ReactNode;
	onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
	const { className, children, onScrollEnd } = props;
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const scrollPosition = useSelector((state: StateSchema) =>
		getScrollRestorationByPath(state, pathname),
	);

	useInfiniteScroll({
		triggerRef,
		wrapperRef: toggleFeatures({
			name: 'isAppRedesigned',
			on: () => undefined,
			off: () => wrapperRef,
		}),
		callback: onScrollEnd,
	});

	const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
		dispatch(
			scrollRestorationActions.setScrollPosition({
				path: pathname,
				position: e.currentTarget.scrollTop,
			}),
		);
	}, 500);

	useInitialEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition;
	});

	return (
		<main
			ref={wrapperRef}
			className={classNames(
				toggleFeatures({
					name: 'isAppRedesigned',
					on: () => cls.PageRedesigned,
					off: () => cls.Page,
				}),
				{},
				[className],
			)}
			onScroll={onScroll}
			data-testid={props['data-testid'] ?? 'page'}
			id={PAGE_ID}
		>
			{children}
			{onScrollEnd ? (
				<div
					ref={triggerRef}
					className={cls.trigger}
				/>
			) : null}
		</main>
	);
});
