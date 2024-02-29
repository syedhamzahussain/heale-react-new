import { IHttpResponse } from './http-response.interface';
import { UserRole } from '../enums/user-role.enum';

export interface IAuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  forcePasswordChange?: boolean;
}

export interface IAuthUserData {
  token: string;
  user: IAuthUser;
}

export interface IAuthData {
  code: number;
  success: boolean;
  message: string;
  data: IAuthUserData;
}

export interface IAuthResponse extends IHttpResponse {
  data: IAuthData;
}
