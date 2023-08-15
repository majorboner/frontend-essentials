import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((collapsed) => !collapsed);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={cls.item}
        >
          <HomeIcon className={cls.icon} />
          <span className={cls.link}>{t('Главная')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to="/about"
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('О сайте')}</span>
        </AppLink>
      </div>
      <Button
        data-testid="sidebar-switcher"
        theme={ThemeButton.BACKGROUND}
        className={classNames(cls.collapseButton, {}, [className])}
        square
        size={ButtonSize.L}
        onClick={onToggle}
      >
        {collapsed ? t('Сайдбар свернут') : t('Сайдбар развернут')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
