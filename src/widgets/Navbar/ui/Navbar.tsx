import { classNames } from 'shared/lib/classNames/classNames';
import img from 'shared/assets/icons/user-icon.png';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
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
      <div className={classNames(cls.NavBar, {}, [className])}>
        <Button
          onClick={onLogout}
          className={cls.links}
          theme={ThemeButton.CLEAR}
        >
          {t('Выйти')}
        </Button>
        <img src={img} alt="123" />
      </div>
    );
  }

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
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

    </div>
  );
};

export default Navbar;
