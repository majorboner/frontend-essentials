import { Popover as HUIPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDirection } from '@/shared/types/ui';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
	className?: string;
	trigger: ReactNode;
	direction?: DropDirection;
	children: ReactNode;
}

export function Popover(props: PopoverProps) {
	const { className, trigger, direction = 'bottom left', children } = props;
	const menuClasses = [mapDirectionClass[direction]];
	return (
		<HUIPopover
			className={classNames(cls.Popover, {}, [className, popupCls.popup])}
		>
			<HUIPopover.Button
				as="div"
				className={popupCls.trigger}
			>
				{trigger}
			</HUIPopover.Button>

			<HUIPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
				{children}
			</HUIPopover.Panel>
		</HUIPopover>
	);
}
