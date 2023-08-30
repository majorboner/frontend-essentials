import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((collapsed) => !collapsed);
  };
  const [test, setTest] = useState(0);
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.items}>
        {
          SidebarItemsList.map((item) => (
            <SidebarItem
              item={item}
              collapsed={collapsed}
              key={item.path}
            />
          ))
        }
      </div>
      <Button onClick={() => setTest(test + 1)}>{test}</Button>
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
