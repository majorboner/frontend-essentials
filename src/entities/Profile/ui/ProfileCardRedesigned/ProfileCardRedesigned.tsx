import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardRedesignedError = () => {
	const { t } = useTranslation('profile');
	return (
		<div>
			<Text
				align="center"
				variant="error"
				title={t('Произошла ошибка')}
				text={t('Попробуйте обновить страницу')}
			/>
		</div>
	);
};

export const ProfileCardRedesignedSkeleton = () => (
	<Card
		padding="24"
		max
	>
		<VStack gap="32">
			<HStack
				max
				justify="center"
			>
				<Skeleton
					width={128}
					height={128}
					border="100%"
				/>
			</HStack>
			<HStack
				gap="32"
				max
			>
				<VStack gap="16">
					<Skeleton
						width="100%"
						height={38}
					/>
					<Skeleton
						width="100%"
						height={38}
					/>
					<Skeleton
						width="100%"
						height={38}
					/>
					<Skeleton
						width="100%"
						height={38}
					/>
				</VStack>
				<VStack gap="16">
					<Skeleton
						width="100%"
						height={38}
					/>
					<Skeleton
						width="100%"
						height={38}
					/>
					<Skeleton
						width="100%"
						height={38}
					/>
					<Skeleton
						width="100%"
						height={38}
					/>
				</VStack>
			</HStack>
		</VStack>
	</Card>
);

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
	const { t } = useTranslation();
	const {
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
	return (
		<Card
			max
			padding="24"
		>
			<VStack
				gap="32"
				max
			>
				{data?.avatar && (
					<HStack
						justify="center"
						max
					>
						<Avatar
							size={128}
							src={data?.avatar}
							alt="user avatar"
						/>
					</HStack>
				)}
				<HStack
					gap="24"
					max
				>
					<VStack
						gap="16"
						max
					>
						<Input
							value={data?.firstName}
							label={t('имя')}
							readonly={readonly}
							onChange={onChangeFirstName}
							data-testid="ProfileCard.firstName"
						/>
						<Input
							value={data?.lastName}
							label={t('фамилия')}
							readonly={readonly}
							onChange={onChangeLastName}
							data-testid="ProfileCard.lastName"
						/>
						<Input
							value={data?.age}
							label={t('возраст')}
							readonly={readonly}
							onChange={onChangeAge}
							data-testid="ProfileCard.age"
						/>
						<Input
							value={data?.city}
							label={t('город')}
							readonly={readonly}
							onChange={onChangeCity}
							data-testid="ProfileCard.city"
						/>
					</VStack>
					<VStack
						gap="16"
						max
					>
						<Input
							value={data?.avatar}
							label={t('аватар')}
							readonly={readonly}
							onChange={onChangeAvatar}
							data-testid="ProfileCard.avatar"
						/>
						<Input
							value={data?.username}
							label={t('никнейм')}
							readonly={readonly}
							onChange={onChangeUsername}
							data-testid="ProfileCard.username"
						/>
						<CurrencySelect
							value={data?.currency}
							onChange={onChangeCurrency}
							readonly={readonly}
							data-testid="ProfileCard.currency"
						/>
						<CountrySelect
							value={data?.country}
							onChange={onChangeCountry}
							readonly={readonly}
							data-testid="ProfileCard.country"
						/>
					</VStack>
				</HStack>
			</VStack>
		</Card>
	);
});
