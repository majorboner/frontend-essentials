import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import {
  getUserAuthData, getUserIsAdmin, getUserIsManager, userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

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

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      trigger={<Avatar src={authData.avatar} size={32} />}
      items={[
        ...(isAdminPanelAvailable ? [{
          content: t('Админка'),
          href: RoutePath.admin,
        }] : []),
        {
          content: t('Профиль'),
          href: RoutePath.profile + authData.id,
        }, {
          content: t('Выйти'),
          onClick: onLogout,
        }]}
    />
  );
});
