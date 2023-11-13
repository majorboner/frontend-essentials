import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import cls from './NotificationList.module.scss';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { toggleFeatures } from '@/shared/lib/features';

interface NotificationProps {
	className?: string;
}

export const NotificationList = memo((props: NotificationProps) => {
	const { className } = props;
	const { data, isLoading } = useNotifications(null, {
		pollingInterval: 5000,
	});

	const Skeleton = toggleFeatures({
		name: 'isAppRedesigned',
		on: () => SkeletonRedesigned,
		off: () => SkeletonDeprecated,
	});

	if (isLoading) {
		return (
			<VStack
				gap="16"
				max
				className={classNames(cls.Notification, {}, [className])}
			>
				<Skeleton
					width="100%"
					border="8px"
					height="80px"
				/>
				<Skeleton
					width="100%"
					border="8px"
					height="80px"
				/>
				<Skeleton
					width="100%"
					border="8px"
					height="80px"
				/>
			</VStack>
		);
	}

	return (
		<VStack
			gap="16"
			max
			className={classNames(cls.Notification, {}, [className])}
		>
			{data?.map((item) => (
				<NotificationItem
					item={item}
					key={item.id}
				/>
			))}
		</VStack>
	);
});
