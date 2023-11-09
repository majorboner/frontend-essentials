import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import cls from './NotificationItem.module.scss';
import { NotificationSchema } from '../../model/types/notificationSchema';

interface NotificationItemProps {
	className?: string;
	item: NotificationSchema;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
	const { className, item } = props;

	const content = (
		<Card
			theme={CardTheme.OUTLINE}
			className={classNames(cls.NotificationItem, {}, [className])}
		>
			<Text
				title={item.title}
				text={item.description}
			/>
		</Card>
	);

	if (item.href) {
		return (
			<AppLink
				to={item.href}
				className={cls.link}
			>
				{content}
			</AppLink>
		);
	}

	return content;
});
