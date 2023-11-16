import { Listbox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDirection } from '@/shared/types/ui';
import { HStack } from '../../../../redesigned/Stack';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import { Button } from '../../../Button';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '../../../Icon';

export interface ListBoxOptions<T extends string> {
	value: T;
	content: ReactNode;
	disabled?: boolean;
}

interface ListBoxProps<T extends string> {
	className?: string;
	label?: string;
	options?: ListBoxOptions<T>[];
	onChange: (value: T) => void;
	value?: T;
	defaultValue?: string;
	readonly?: boolean;
	direction?: DropDirection;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
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
	const listBoxClasses = [mapDirectionClass[direction], popupCls.menu];
	const selectedItem = useMemo(
		() => options?.find((option) => option.value === value),
		[options, value],
	);
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
						as={Button}
						variant="filled"
						addonRight={<Icon Svg={ArrowIcon} />}
						className={classNames(cls.button, { [cls.readonly]: readonly }, [
							className,
						])}
					>
						{selectedItem?.content ?? defaultValue}
					</Listbox.Button>
					<Listbox.Options
						className={classNames(cls.options, {}, listBoxClasses)}
					>
						{options?.map((option) => (
							<Listbox.Option
								key={option.value}
								value={option.value}
								disabled={option.disabled}
								as={Fragment}
							>
								{({ active, selected }) => (
									<li
										className={classNames(
											cls.item,
											{
												[popupCls.active]: active,
												[popupCls.disabled]: option.disabled,
												[popupCls.selected]: selected,
											},
											[],
										)}
									>
										{selected}
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
};
