import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import {
	ListBox as ListBoxDeprecated,
	ListBoxOptions,
} from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';
import { ToggleFeature } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
	className?: string;
	value?: Country;
	onChange?: (value: Country) => void;
	readonly?: boolean;
}

const options: ListBoxOptions[] = [
	{
		id: 1,
		value: Country.Armenia,
		content: Country.Armenia,
		disabled: false,
	},
	{
		id: 2,
		value: Country.Russia,
		content: Country.Russia,
		disabled: false,
	},
	{
		id: 3,
		value: Country.Belarus,
		content: Country.Belarus,
		disabled: false,
	},
	{
		id: 4,
		value: Country.Kazakhstan,
		content: Country.Kazakhstan,
		disabled: true,
	},
	{
		id: 5,
		value: Country.Ukraine,
		content: Country.Ukraine,
		disabled: false,
	},
];

export const CountrySelect = memo(
	({ className, value, onChange, readonly }: CountrySelectProps) => {
		const { t } = useTranslation('profile');

		const onChangeHandler = useCallback(
			(value: string) => {
				onChange?.(value as Country);
			},
			[onChange],
		);

		const props = {
			options,
			value,
			defaultValue: 'Страна',
			onChange: onChangeHandler,
			readonly,
			label: t('страна'),
			className,
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
