import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { ProfileCard } from '@/entities/Profile';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidationErrors } from '../../model/selectors/getProfileValidationErrors/getProfileValidationErrors';
import { fetchProfileData } from '../../model/service/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { ProfileValidationErrors } from '@/shared/const/error';

const reducers: ReducersList = {
	profile: profileReducer,
};

interface EditableProfileCardProps {
	className?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
	const { t } = useTranslation('profile');
	const { className } = props;
	const formData = useSelector(getProfileForm);
	const error = useSelector(getProfileError);
	// const isLoading = useSelector(getProfileIsLoading);
	const isLoading = true;
	const readonly = useSelector(getProfileReadonly);
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const validateErrors = useSelector(getProfileValidationErrors);

	const validateErrorsTranslates = {
		[ProfileValidationErrors.INCORRECT_AGE]: t('Некорректный возраст'),
		[ProfileValidationErrors.INCORRECT_COUNTRY]: t('Некоректная страна'),
		[ProfileValidationErrors.INCORRECT_NAME]: t('Некорректное имя или фамилия'),
		[ProfileValidationErrors.NO_DATA]: t('Данные отсутствуют'),
		[ProfileValidationErrors.SERVER_ERROR]: t('Ошибка сервера'),
	};

	useInitialEffect(() => {
		if (id) {
			dispatch(fetchProfileData(id));
		}
	});

	const onChangeFirstName = useCallback(
		(value: string) => {
			dispatch(profileActions.updateProfile({ firstName: value || '' }));
		},
		[dispatch],
	);

	const onChangeLastName = useCallback(
		(value: string) => {
			dispatch(profileActions.updateProfile({ lastName: value || '' }));
		},
		[dispatch],
	);

	const onChangeAge = useCallback(
		(value: string) => {
			dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
		},
		[dispatch],
	);

	const onChangeCity = useCallback(
		(value: string) => {
			dispatch(profileActions.updateProfile({ city: value || '' }));
		},
		[dispatch],
	);

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(profileActions.updateProfile({ username: value || '' }));
		},
		[dispatch],
	);

	const onChangeAvatar = useCallback(
		(value: string) => {
			dispatch(profileActions.updateProfile({ avatar: value || '' }));
		},
		[dispatch],
	);

	const onChangeCurrency = useCallback(
		(currency: Currency) => {
			dispatch(profileActions.updateProfile({ currency }));
		},
		[dispatch],
	);

	const onChangeCountry = useCallback(
		(country: Country) => {
			dispatch(profileActions.updateProfile({ country }));
		},
		[dispatch],
	);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<VStack
				gap="16"
				max
				className={classNames('', {}, [className])}
			>
				<EditableProfileCardHeader />
				{validateErrors?.length &&
					validateErrors.map((err: ProfileValidationErrors) => (
						<Text
							key={err}
							theme={TextTheme.ERROR}
							text={validateErrorsTranslates[err]}
						/>
					))}
				<ProfileCard
					data={formData}
					isLoading={isLoading}
					error={error}
					readonly={readonly}
					onChangeFirstName={onChangeFirstName}
					onChangeLastName={onChangeLastName}
					onChangeAge={onChangeAge}
					onChangeCity={onChangeCity}
					onChangeAvatar={onChangeAvatar}
					onChangeUsername={onChangeUsername}
					onChangeCurrency={onChangeCurrency}
					onChangeCountry={onChangeCountry}
				/>
			</VStack>
		</DynamicModuleLoader>
	);
});
