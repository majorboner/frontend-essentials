import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

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
        ПЕРЕКЛЮЧИТЬ
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* Язык */}
      </div>
    </div>
  );
};
