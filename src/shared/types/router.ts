import { RouteProps } from 'react-router-dom';
import { UserRoles } from '../const/user';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
	roles?: UserRoles[];
};
