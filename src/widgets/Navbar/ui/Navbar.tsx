/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import img from 'shared/assets/icons/user-icon.png';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthOpen((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <Button
        onClick={onToggleModal}
        className={cls.links}
        theme={ThemeButton.CLEAR}
      >
        {t('Войти')}
      </Button>
      <img src={img} alt="123" />
      <Modal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Illo fugit reiciendis officiis adipisci numquam ipsa enim aperiam dicta tempora quos?
      </Modal>
    </div>
  );
};

export default Navbar;
