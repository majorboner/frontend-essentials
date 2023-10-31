import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox, ListBoxOptions } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options: ListBoxOptions[] = [
  {
    id: 1, value: Currency.RUB, content: Currency.RUB, disabled: false,
  },
  {
    id: 2, value: Currency.EUR, content: Currency.EUR, disabled: false,
  },
  {
    id: 3, value: Currency.USD, content: Currency.USD, disabled: false,
  },
];

export const CurrencySelect = memo(({
  className, value, onChange, readonly,
}: CurrencySelectProps) => {
  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <ListBox
      className={className}
      label={t('валюта')}
      options={options}
      value={value}
      defaultValue="Валюта"
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
