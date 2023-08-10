import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { t } from 'i18next';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((collapsed) => !collapsed);
  };
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        theme={ThemeButton.CLEAR}
        className={classNames(cls.Button, {}, [className])}
        onClick={onToggle}
      >
        {t('Сайдбар')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
