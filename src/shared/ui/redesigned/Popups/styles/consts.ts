import { DropDirection } from '@/shared/types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropDirection, string> = {
	'bottom left': cls.dropBottomLeft,
	'bottom right': cls.dropBottomRight,
	'top left': cls.dropTopLeft,
	'top right': cls.dropTopRight,
};
