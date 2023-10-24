import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Listbox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { HStack } from '../Stack';

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
}

export const ListBox = memo((props: ListBoxProps) => {
  const {
    className, label, options, onChange, value, readonly, defaultValue,
  } = props;
  return (
    <HStack gap="8">
      {label && (<span>{label}</span>)}
      <Listbox value="s" onChange={onChange} disabled={readonly}>
        <div className={cls.relativeWrapper}>
          <Listbox.Button
            as="button"
            className={classNames(cls.button, { [cls.readonly]: readonly }, [className])}
          >
            {value ?? defaultValue}
          </Listbox.Button>
          <Listbox.Options className={cls.options}>
            {options.map((option) => (
              <Listbox.Option
                key={option.id}
                value={option.value}
                disabled={option.disabled}
              >
                {({ active }) => (
                  <li
                    className={classNames(cls.item, { [cls.active]: active }, [])}

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
