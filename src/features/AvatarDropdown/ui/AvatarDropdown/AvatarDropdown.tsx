import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import {
	getUserAuthData,
	getUserIsAdmin,
	getUserIsManager,
	userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
	getRouteAdmin,
	getRouteProfile,
	getRouteSettings,
} from '@/shared/const/router';
import { ToggleFeature } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface AvatarDropdownProps {
	className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
	const { t } = useTranslation();
	const { className } = props;
	const dispatch = useAppDispatch();
	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);
	const authData = useSelector(getUserAuthData);
	const isAdmin = useSelector(getUserIsAdmin);
	const isManager = useSelector(getUserIsManager);
	const isAdminPanelAvailable = isAdmin || isManager;

	if (!authData) {
		return null;
	}

	const items = [
		...(isAdminPanelAvailable
			? [
					{
						content: t('Админка'),
						href: getRouteAdmin(),
					},
			  ]
			: []),
		{
			content: t('Профиль'),
			href: getRouteProfile(authData.id),
		},
		{
			content: t('Настройки'),
			href: getRouteSettings(),
		},
		{
			content: t('Выйти'),
			onClick: onLogout,
		},
	];

	return (
		<ToggleFeature
			feature="isAppRedesigned"
			on={
				<Dropdown
					className={classNames('', {}, [className])}
					direction="bottom left"
					trigger={
						<Avatar
							src={authData.avatar}
							size={48}
						/>
					}
					items={items}
				/>
			}
			off={
				<DropdownDeprecated
					className={classNames('', {}, [className])}
					trigger={
						<AvatarDeprecated
							fallbackInverted
							src={authData.avatar}
							size={32}
						/>
					}
					items={items}
				/>
			}
		/>
	);
});
