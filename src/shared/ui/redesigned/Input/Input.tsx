import {
	ChangeEvent,
	InputHTMLAttributes,
	ReactNode,
	memo,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { HStack } from '../../redesigned/Stack';
import { Text } from '../Text';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange' | 'readOnly' | 'size'
>;

export type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string | number;
	onChange?: (value: string) => void;
	autofocus?: boolean;
	readonly?: boolean;
	addonLeft?: ReactNode;
	addonRight?: ReactNode;
	label?: string;
	size?: InputSize;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		placeholder,
		autofocus,
		readonly,
		addonLeft,
		addonRight,
		label,
		size = 'm',
		...otherProps
	} = props;

	const ref = useRef<HTMLInputElement>(null);

	const [isFocused, setIsFocused] = useState(false);

	const onBlur = () => {
		setIsFocused(false);
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true);
			ref.current?.focus();
		}
	}, [autofocus]);

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	const mods: Mods = {
		[cls.readonly]: readonly,
		[cls.focused]: isFocused,
		[cls.withAddonLeft]: Boolean(addonLeft),
		[cls.withAddonRight]: Boolean(addonRight),
	};

	const input = (
		<div className={classNames(cls.InputWrapper, mods, [className, cls[size]])}>
			<div className={cls.addonLeft}>{addonLeft}</div>
			<input
				className={classNames(cls.input, {}, [className])}
				ref={ref}
				type={type}
				value={value}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={onChangeHandler}
				readOnly={readonly}
				placeholder={placeholder}
				{...otherProps}
			/>
			<div className={cls.addonRight}>{addonRight}</div>
		</div>
	);

	if (label) {
		return (
			<HStack
				gap="8"
				max
			>
				<Text text={label} />
				{input}
			</HStack>
		);
	}

	return input;
});
