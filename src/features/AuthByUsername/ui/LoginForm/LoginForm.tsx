import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from 'shared/ui/Stack';
import { getLoginUsername } from '../../model/selectors/getLoginUsername.ts/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword.ts/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import {
  loginByUsername,
} from '../../model/services/loginByUsername/loginByUsername';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReducers}
    >
      <VStack
        gap="16"
        className={classNames('', {}, [className])}
      >
        <Text title={t('Форма авторизации')} />
        {error
          && <Text text={error} theme={TextTheme.ERROR} />}
        <Input
          type="text"
          className={cls.input}
          placeholder={t('Логин')}
          autofocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={cls.input}
          placeholder={t('Пароль')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={cls.loginBtn}
          theme={ThemeButton.BACKGROUND}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </VStack>
    </DynamicModuleLoader>

  );
});

export default LoginForm;
