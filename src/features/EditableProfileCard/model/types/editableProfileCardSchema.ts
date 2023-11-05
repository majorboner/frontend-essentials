import { Profile } from '@/entities/Profile';
import { ProfileValidationErrors } from '@/shared/const/error';

export interface ProfileSchema {
	data?: Profile;
	form?: Profile;
	isLoading: boolean;
	error?: string;
	readonly: boolean;
	validateErrors?: ProfileValidationErrors[];
}
