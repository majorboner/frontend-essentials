import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthOpen(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(cls.NavBar, {}, [className])}>
        <Text
          title={t('Ulalume App')}
          className={cls.appName}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.PRIMARY}
          className={cls.createBtn}
        >
          {t('Создать статью')}
        </AppLink>
        <Dropdown
          trigger={<Avatar src={authData.avatar} size={32} />}
          items={[
            {
              content: t('Профиль'),
              href: RoutePath.profile + authData.id,
            }, {
              content: t('Выйти'),
              onClick: onLogout,
            }]}
          className={cls.links}
        />
      </header>
    );
  }

  return (
    <header className={classNames(cls.NavBar, {}, [className])}>
      <Button
        onClick={onShowModal}
        className={cls.links}
        theme={ThemeButton.CLEAR}
      >
        {t('Войти')}
      </Button>
      {isAuthOpen && (
        <LoginModal
          isOpen={isAuthOpen}
          onClose={onCloseModal}
        />
      )}

    </header>
  );
};

export default Navbar;
