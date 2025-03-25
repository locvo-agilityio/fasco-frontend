export interface IUserRequest {
  id?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export type IUserResponse = IUserRequest & {
  documentId: string;
  jwt: string;
  jti: string;
};
