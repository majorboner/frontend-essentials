import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
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
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <ListBox
      className={classNames('', {}, [className])}
      label={t('Укажите валюту>')}
      options={options}
      value={value}
      defaultValue="Валюта"
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );

  // return (
  //   <Select
  //     className={classNames('', {}, [className])}
  //     label={t('Укажите валюту')}
  //     options={options}
  //     value={value}
  //     onChange={onChangeHandler}
  //     readonly={readonly}
  //   />
  // );
});
