import { memo } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDirection } from '@/shared/types/ui';
import { HStack } from '../../../Stack';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxOptions {
	id: number;
	value: string;
	content: string;
	disabled: boolean;
}

interface ListBoxProps {
	className?: string;
	label?: string;
	options: ListBoxOptions[];
	onChange: (value: string) => void;
	value: string | undefined;
	defaultValue: string;
	readonly?: boolean;
	direction?: DropDirection;
}

/**
 * Устарело, используем новые компоненты из папки redesigned!
 * @deprecated
 */

export const ListBox = memo((props: ListBoxProps) => {
	const {
		className,
		label,
		options,
		onChange,
		value,
		readonly,
		defaultValue,
		direction = 'bottom right',
	} = props;
	const listBoxClasses = [mapDirectionClass[direction]];
	return (
		<HStack gap="8">
			{label && <span>{label}</span>}
			<Listbox
				as="div"
				value={value}
				onChange={onChange}
				disabled={readonly}
				className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
			>
				<div className={cls.relativeWrapper}>
					<Listbox.Button
						as="button"
						className={classNames(cls.button, { [cls.readonly]: readonly }, [
							className,
						])}
					>
						{value ?? defaultValue}
					</Listbox.Button>
					<Listbox.Options
						className={classNames(cls.options, {}, listBoxClasses)}
					>
						{options.map((option) => (
							<Listbox.Option
								key={option.id}
								value={option.value}
								disabled={option.disabled}
							>
								{({ active }) => (
									<li
										className={classNames(
											cls.item,
											{
												[popupCls.active]: active,
												[popupCls.disabled]: option.disabled,
											},
											[],
										)}
									>
										{option.value === value && '>'}
										{option.content}
									</li>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</div>
			</Listbox>
		</HStack>
	);
});
