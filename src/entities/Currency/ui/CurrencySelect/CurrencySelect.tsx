import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import {
	ListBox as ListBoxDeprecated,
	ListBoxOptions,
} from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeature } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
	className?: string;
	value?: Currency;
	onChange?: (value: Currency) => void;
	readonly?: boolean;
}

const options: ListBoxOptions[] = [
	{
		id: 1,
		value: Currency.RUB,
		content: Currency.RUB,
		disabled: false,
	},
	{
		id: 2,
		value: Currency.EUR,
		content: Currency.EUR,
		disabled: false,
	},
	{
		id: 3,
		value: Currency.USD,
		content: Currency.USD,
		disabled: false,
	},
];

export const CurrencySelect = memo(
	({ className, value, onChange, readonly }: CurrencySelectProps) => {
		const { t } = useTranslation('profile');

		const onChangeHandler = useCallback(
			(value: string) => {
				onChange?.(value as Currency);
			},
			[onChange],
		);

		const props = {
			className,
			label: t('валюта'),
			options,
			value,
			defaultValue: 'Валюта',
			onChange: onChangeHandler,
			readonly,
		};

		return (
			<ToggleFeature
				feature="isAppRedesigned"
				on={<ListBox {...props} />}
				off={<ListBoxDeprecated {...props} />}
			/>
		);
	},
);
