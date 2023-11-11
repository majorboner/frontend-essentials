import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Profile } from '../../model/types/profile';
import { ToggleFeature } from '@/shared/lib/features';
import {
	ProfileCardDeprecated,
	ProfileCardDeprecatedError,
	ProfileCardDeprecatedSkeleton,
} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import {
	ProfileCardRedesigned,
	ProfileCardRedesignedError,
	ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
	className?: string;
	data?: Profile;
	error?: string;
	isLoading?: boolean;
	readonly?: boolean;
	onChangeFirstName?: (value: string) => void;
	onChangeLastName?: (value: string) => void;
	onChangeCity?: (value: string) => void;
	onChangeAge?: (value: string) => void;
	onChangeAvatar?: (value: string) => void;
	onChangeUsername?: (value: string) => void;
	onChangeCurrency?: (value: Currency) => void;
	onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const { isLoading, error } = props;

	if (isLoading) {
		return (
			<ToggleFeature
				feature="isAppRedesigned"
				on={<ProfileCardRedesignedSkeleton />}
				off={<ProfileCardDeprecatedSkeleton />}
			/>
		);
	}

	if (error) {
		return (
			<ToggleFeature
				feature="isAppRedesigned"
				on={<ProfileCardRedesignedError />}
				off={<ProfileCardDeprecatedError />}
			/>
		);
	}

	return (
		<ToggleFeature
			feature="isAppRedesigned"
			on={<ProfileCardRedesigned {...props} />}
			off={<ProfileCardDeprecated {...props} />}
		/>
	);
};
