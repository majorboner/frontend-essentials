import { UserRoles } from '@/shared/const/user';
import { FeatureFlags } from '@/shared/types/featureFlags';

export interface User {
	id: string;
	username: string;
	avatar?: string;
	roles?: UserRoles[];
	features?: FeatureFlags;
}

export interface UserSchema {
	authData?: User;
	_inited: boolean;
}
