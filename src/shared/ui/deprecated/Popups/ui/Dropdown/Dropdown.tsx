import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDirection } from '@/shared/types/ui';
import cls from './Dropdown.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import { AppLink } from '../../../AppLink';

export interface DropDownItem {
	disabled?: boolean;
	content?: ReactNode;
	onClick?: () => void;
	href?: string;
}

interface DropdownProps {
	className?: string;
	items: DropDownItem[];
	trigger: ReactNode;
	direction?: DropDirection;
}

/**
 * Устарело, используем новые компоненты из папки redesigned!
 * @deprecated
 */

export function Dropdown(props: DropdownProps) {
	const { className, items, trigger, direction = 'bottom left' } = props;

	const menuClasses = [mapDirectionClass[direction]];

	return (
		<Menu
			as="div"
			className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}
		>
			<Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
			<Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
				{items.map((item, index) => {
					const content = ({ active }: { active: boolean }) => (
						<button
							type="button"
							className={classNames(cls.item, { [popupCls.active]: active })}
							onClick={item.onClick}
							disabled={item.disabled}
						>
							{item.content}
						</button>
					);

					if (item.href) {
						return (
							<Menu.Item
								as={AppLink}
								to={item.href}
								disabled={item.disabled}
								key={`dropdown-key-${index}`}
							>
								{content}
							</Menu.Item>
						);
					}

					return (
						<Menu.Item
							as={Fragment}
							disabled={item.disabled}
							key={`dropdown-key-${index}`}
						>
							{content}
						</Menu.Item>
					);
				})}
			</Menu.Items>
		</Menu>
	);
}
