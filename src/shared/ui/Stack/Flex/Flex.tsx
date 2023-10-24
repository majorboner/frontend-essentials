import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, memo } from 'react';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'evenly';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '8' | '16' | '24' | '32';

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
  evenly: cls.justifyEvenly,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  8: cls.gapS,
  16: cls.gapM,
  24: cls.gapL,
  32: cls.gapXL,
};

export interface FlexProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
}

export const Flex = memo((props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap = '8',
    max = false,
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gapClasses[gap],
  ];

  return (
    <div className={classNames(cls.Flex, { [cls.max]: max }, classes)}>
      {children}
    </div>
  );
});
