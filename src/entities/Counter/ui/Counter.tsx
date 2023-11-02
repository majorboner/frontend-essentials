import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue }
  from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const { t } = useTranslation();

  const counterValue = useCounterValue();

  const { decrement, increment } = useCounterActions();

  const handlerInc = () => {
    increment();
  };
  const handlerDec = () => {
    decrement();
  };

  return (
    <div>
      <h1>
        {counterValue}
      </h1>
      <Button
        onClick={handlerInc}
        theme={ThemeButton.OUTLINE}
      >
        {t('Инкремент')}
      </Button>
      <Button
        onClick={handlerDec}
        theme={ThemeButton.OUTLINE}
      >
        {t('Декремент')}
      </Button>
    </div>
  );
};
