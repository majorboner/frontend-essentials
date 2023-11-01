import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue }
  from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>
        {counterValue}
      </h1>
      <Button
        onClick={increment}
        theme={ThemeButton.OUTLINE}
      >
        {t('Инкремент')}
      </Button>
      <Button
        onClick={decrement}
        theme={ThemeButton.OUTLINE}
      >
        {t('Декремент')}
      </Button>
    </div>
  );
};
