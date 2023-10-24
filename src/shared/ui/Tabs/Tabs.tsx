import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, memo, useCallback } from 'react';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';
import { HStack } from '../Stack';

export interface TabItem {
  value: string;
  content: ReactNode
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    value,
    onTabClick,
  } = props;

  const clickHandle = useCallback((tab: TabItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <HStack gap="8" className={classNames(cls.Tabs, {}, [className])}>
      {
        tabs.map((tab) => (
          <Card
            theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
            className={cls.tab}
            key={tab.value}
            onClick={clickHandle(tab)}
          >
            {tab.content}
          </Card>
        ))
      }
    </HStack>
  );
});
