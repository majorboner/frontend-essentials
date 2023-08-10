import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import img from 'shared/assets/icons/user-icon.png';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
          О сайте
        </AppLink>
      </div>
      <img src={img} alt="123" />
    </div>
  );
};

export default Navbar;
