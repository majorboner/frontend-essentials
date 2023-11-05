import { UserRoles } from '@/shared/const/user';

export interface User {
	id: string;
	username: string;
	avatar?: string;
	roles: UserRoles[];
}

export interface UserSchema {
	authData?: User;
	_inited: boolean;
}
