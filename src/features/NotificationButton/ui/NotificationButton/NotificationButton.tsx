import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NotificationList } from '@/entities/Notification';
import {
	Button as ButtonDeprecated,
	ThemeButton,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import NotificationIconDeprecated from '@/shared/assets/icons/notification.svg';
import NotificationIcon from '@/shared/assets/icons/notification-new.svg';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import cls from './NotificationButton.module.scss';
import { ToggleFeature } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
	className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
	const { className } = props;

	const [isOpen, setIsOpen] = useState(false);
	const onOpenDrawer = useCallback(() => {
		setIsOpen(true);
	}, []);

	const onCloseDrawer = useCallback(() => {
		setIsOpen(false);
	}, []);

	const trigger = (
		<ToggleFeature
			feature="isAppRedesigned"
			on={
				<Icon
					Svg={NotificationIcon}
					clickable
					onClick={onOpenDrawer}
				/>
			}
			off={
				<ButtonDeprecated
					onClick={onOpenDrawer}
					theme={ThemeButton.CLEAR}
				>
					<IconDeprecated
						Svg={NotificationIconDeprecated}
						inverted
					/>
				</ButtonDeprecated>
			}
		/>
	);
	return (
		<div>
			<BrowserView>
				<ToggleFeature
					feature="isAppRedesigned"
					on={
						<Popover
							className={classNames(cls.NotificationButton, {}, [className])}
							direction="bottom left"
							trigger={trigger}
						>
							<NotificationList className={cls.notifications} />
						</Popover>
					}
					off={
						<PopoverDeprecated
							className={classNames(cls.NotificationButton, {}, [className])}
							direction="bottom left"
							trigger={trigger}
						>
							<NotificationList className={cls.notifications} />
						</PopoverDeprecated>
					}
				/>
			</BrowserView>
			<MobileView>
				{trigger}
				<Drawer
					isOpen={isOpen}
					onClose={onCloseDrawer}
				>
					<NotificationList />
				</Drawer>
			</MobileView>
		</div>
	);
});
