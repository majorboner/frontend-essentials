import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	Button as ButtonDeprecated,
	ThemeButton,
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { getLoginUsername } from '../../model/selectors/getLoginUsername.ts/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword.ts/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { ToggleFeature } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

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
	const forceUpdate = useForceUpdate();

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value));
		},
		[dispatch],
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch],
	);

	const onLoginClick = useCallback(async () => {
		const result = await dispatch(loginByUsername({ username, password }));
		if (result.meta.requestStatus === 'fulfilled') {
			onSuccess();
			forceUpdate();
		}
	}, [dispatch, username, password, onSuccess, forceUpdate]);

	return (
		<DynamicModuleLoader
			removeAfterUnmount
			reducers={initialReducers}
		>
			<ToggleFeature
				feature="isAppRedesigned"
				on={
					<VStack
						gap="16"
						className={classNames('', {}, [className])}
					>
						<Text title={t('Форма авторизации')} />
						<Text text={t('Логин: jabberwock')} />
						<Text text={t('Пароль: 123')} />
						{error && (
							<Text
								text={error}
								variant="error"
							/>
						)}
						<Input
							label={t('Логин')}
							type="text"
							className={cls.input}
							autofocus
							onChange={onChangeUsername}
							value={username}
						/>
						<Input
							label={t('Пароль')}
							type="text"
							className={cls.input}
							onChange={onChangePassword}
							value={password}
						/>
						<Button
							className={cls.loginBtn}
							variant="outline"
							onClick={onLoginClick}
							disabled={isLoading}
						>
							{t('Войти')}
						</Button>
					</VStack>
				}
				off={
					<VStack
						gap="16"
						className={classNames('', {}, [className])}
					>
						<TextDeprecated title={t('Форма авторизации')} />
						{error && (
							<TextDeprecated
								text={error}
								theme={TextTheme.ERROR}
							/>
						)}
						<InputDeprecated
							type="text"
							className={cls.input}
							placeholder={t('Логин')}
							autofocus
							onChange={onChangeUsername}
							value={username}
						/>
						<InputDeprecated
							type="text"
							className={cls.input}
							placeholder={t('Пароль')}
							onChange={onChangePassword}
							value={password}
						/>
						<ButtonDeprecated
							className={cls.loginBtn}
							theme={ThemeButton.BACKGROUND}
							onClick={onLoginClick}
							disabled={isLoading}
						>
							{t('Войти')}
						</ButtonDeprecated>
					</VStack>
				}
			/>
		</DynamicModuleLoader>
	);
});

export default LoginForm;
