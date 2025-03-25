import { IUserResponse } from '@/models';

export type TAuthResponse = {
  user: IUserResponse;
  jwt: string;
};
