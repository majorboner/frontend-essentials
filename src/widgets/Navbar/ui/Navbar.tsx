/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import img from 'shared/assets/icons/user-icon.png';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthOpen(true);
  }, []);

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <Button
        onClick={onShowModal}
        className={cls.links}
        theme={ThemeButton.CLEAR}
      >
        {t('Войти')}
      </Button>
      <img src={img} alt="123" />
      <LoginModal
        isOpen={isAuthOpen}
        onClose={onCloseModal}
      />
    </div>
  );
};

export default Navbar;
