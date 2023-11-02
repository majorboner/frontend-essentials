import { CSSProperties, useMemo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage/AppImage';
import UserIcon from '@/shared/assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number | string;
  alt?: string;
  fallbackInverted?: boolean;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    size = 100,
    alt,
    fallbackInverted,
  } = props;

  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  const errorFallback = (
    <Icon
      width={size}
      height={size}
      Svg={UserIcon}
      inverted={fallbackInverted}
    />
  );

  const fallback = (
    <Skeleton
      width={size}
      height={size}
      border="50%"
    />
  );

  return (
    <AppImage
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  );
};
