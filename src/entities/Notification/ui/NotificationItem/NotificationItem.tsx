import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import cls from './NotificationItem.module.scss';
import { NotificationSchema } from '../../model/types/notificationSchema';
import { ToggleFeature } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
	className?: string;
	item: NotificationSchema;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
	const { className, item } = props;

	const content = (
		<ToggleFeature
			feature="isAppRedesigned"
			on={
				<Card className={classNames(cls.NotificationItem, {}, [className])}>
					<Text
						title={item.title}
						text={item.description}
					/>
				</Card>
			}
			off={
				<CardDeprecated
					theme={CardTheme.OUTLINE}
					className={classNames(cls.NotificationItem, {}, [className])}
				>
					<TextDeprecated
						title={item.title}
						text={item.description}
					/>
				</CardDeprecated>
			}
		/>
	);

	if (item.href) {
		return (
			<AppLinkDeprecated
				to={item.href}
				className={cls.link}
			>
				{content}
			</AppLinkDeprecated>
		);
	}

	return content;
});
