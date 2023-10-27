export enum UserRoles {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  USER = 'USER',
  BANNED = 'BANNED',
}

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
