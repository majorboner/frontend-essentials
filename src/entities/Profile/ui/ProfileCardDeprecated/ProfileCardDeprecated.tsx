import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardDeprecated.module.scss';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input } from '@/shared/ui/deprecated/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';

export const ProfileCardDeprecatedError = () => {
	const { t } = useTranslation('profile');
	return (
		<div className={classNames(cls.ProfileCard, {}, [cls.error])}>
			<Text
				align={TextAlign.CENTER}
				theme={TextTheme.ERROR}
				title={t('Произошла ошибка')}
				text={t('Попробуйте обновить страницу')}
			/>
		</div>
	);
};

export const ProfileCardDeprecatedSkeleton = () => (
	<HStack
		justify="center"
		align="center"
		max
		className={classNames(cls.ProfileCard, { [cls.loading]: true }, [])}
	>
		<Loader />
	</HStack>
);

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
	const { t } = useTranslation();
	const {
		className,
		data,
		readonly,
		onChangeFirstName,
		onChangeLastName,
		onChangeCity,
		onChangeAge,
		onChangeAvatar,
		onChangeUsername,
		onChangeCurrency,
		onChangeCountry,
	} = props;

	const mods: Mods = {
		[cls.readonly]: readonly,
	};

	return (
		<div className={classNames(cls.ProfileCard, mods, [className])}>
			<VStack gap="8">
				{data?.avatar && (
					<HStack
						justify="center"
						max
					>
						<Avatar
							src={data?.avatar}
							alt="user avatar"
						/>
					</HStack>
				)}

				<Input
					value={data?.firstName}
					placeholder={t('имя')}
					className={cls.input}
					readonly={readonly}
					onChange={onChangeFirstName}
					data-testid="ProfileCard.firstName"
				/>
				<Input
					value={data?.lastName}
					placeholder={t('фамилия')}
					readonly={readonly}
					className={cls.input}
					onChange={onChangeLastName}
					data-testid="ProfileCard.lastName"
				/>
				<Input
					value={data?.age}
					placeholder={t('возраст')}
					readonly={readonly}
					className={cls.input}
					onChange={onChangeAge}
					data-testid="ProfileCard.age"
				/>
				<Input
					value={data?.city}
					placeholder={t('город')}
					readonly={readonly}
					className={cls.input}
					onChange={onChangeCity}
					data-testid="ProfileCard.city"
				/>
				<Input
					value={data?.avatar}
					placeholder={t('аватар')}
					readonly={readonly}
					className={cls.input}
					onChange={onChangeAvatar}
					data-testid="ProfileCard.avatar"
				/>
				<Input
					value={data?.username}
					placeholder={t('никнейм')}
					readonly={readonly}
					className={cls.input}
					onChange={onChangeUsername}
					data-testid="ProfileCard.username"
				/>
				<CurrencySelect
					className={cls.input}
					value={data?.currency}
					onChange={onChangeCurrency}
					readonly={readonly}
					data-testid="ProfileCard.currency"
				/>
				<CountrySelect
					className={cls.input}
					value={data?.country}
					onChange={onChangeCountry}
					readonly={readonly}
					data-testid="ProfileCard.country"
				/>
			</VStack>
		</div>
	);
});
