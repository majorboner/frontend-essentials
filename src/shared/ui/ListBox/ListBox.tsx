import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Listbox } from '@headlessui/react';
import { DropDirection } from 'shared/types/ui';
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
  direction?: DropDirection;
}

const mapDirectionClass: Record<DropDirection, string> = {
  'bottom left': cls.dropBottomLeft,
  'bottom right': cls.dropBottomRight,
  'top left': cls.dropTopLeft,
  'top right': cls.dropTopRight,
};

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
      {label && (<span>{label}</span>)}
      <Listbox value="s" onChange={onChange} disabled={readonly}>
        <div className={cls.relativeWrapper}>
          <Listbox.Button
            as="button"
            className={classNames(cls.button, { [cls.readonly]: readonly }, [className])}
          >
            {value ?? defaultValue}
          </Listbox.Button>
          <Listbox.Options className={classNames(cls.options, {}, listBoxClasses)}>
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
