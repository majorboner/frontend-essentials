import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useSelector } from 'react-redux';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);
  const onToggle = () => {
    setCollapsed((collapsed) => !collapsed);
  };
  return (
    <menu
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <VStack gap="8" className={cls.items}>
        {
          sidebarItemsList.map((item) => (
            <SidebarItem
              item={item}
              collapsed={collapsed}
              key={item.path}
            />
          ))
        }
      </VStack>
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
      <HStack justify="center" max className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </HStack>
    </menu>
  );
};
