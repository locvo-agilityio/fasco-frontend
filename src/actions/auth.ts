'use server';

import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

// Services
import { apiClient } from '@/services';

// Models
import { IUserRequest } from '@/models';

// Constants
import {
  API_ENDPOINT,
  AUTH_ERROR_TYPES,
  AUTH_METHOD,
  ERROR_MESSAGES,
  ROUTES,
  SUCCESS_MESSAGES,
  ToastType,
} from '@/constants';

// Auth
import { signIn } from '@/auth';

const signUp = async (_: { message: string }, data: FormData) => {
  let errorOccurred = false;

  try {
    const payload = {
      email: data.get('email'),
      password: data.get('password'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      username: data.get('email'),
    };

    await apiClient.post<IUserRequest>(API_ENDPOINT.SIGN_UP, payload);

    return {
      status: ToastType.SUCCESS,
      message: SUCCESS_MESSAGES.SIGN_UP_SUCCESS,
    };
  } catch (error) {
    errorOccurred = true;
    return {
      status: ToastType.ERROR,
      message:
        error instanceof Error ? error.message : ERROR_MESSAGES.UNKNOWN_ERROR,
    };
  } finally {
    if (!errorOccurred) {
      await signIn(AUTH_METHOD.CREDENTIALS, {
        email: data.get('email'),
        password: data.get('password'),
        redirectTo: ROUTES.HOME,
      });
    }
  }
};

const login = async (_: { message: string }, data: FormData) => {
  let errorOccurred = false;

  try {
    await signIn(AUTH_METHOD.CREDENTIALS, data);

    return {
      status: ToastType.SUCCESS,
      message: SUCCESS_MESSAGES.SIGN_IN_SUCCESS,
    };
  } catch (error) {
    if (error instanceof AuthError) {
      errorOccurred = true;

      switch (error.type) {
        case AUTH_ERROR_TYPES.CREDENTIALS_SIGN_IN:
          return {
            status: ToastType.ERROR,
            message: ERROR_MESSAGES.EMAIL_PASSWORD_INVALID,
          };

        case AUTH_ERROR_TYPES.CALLBACK_ROUTE_ERROR:
          return {
            status: ToastType.ERROR,
            message: ERROR_MESSAGES.EMAIL_PASSWORD_INVALID,
          };

        default:
          return {
            status: ToastType.ERROR,
            message: ERROR_MESSAGES.UNKNOWN_ERROR,
          };
      }
    }

    throw error;
  } finally {
    if (!errorOccurred) redirect(ROUTES.HOME);
  }
};

const signInWithGitHub = async () => await signIn(AUTH_METHOD.GITHUB);

const signInWithGoogle = async () => await signIn(AUTH_METHOD.GOOGLE);

export { signUp, login, signInWithGitHub, signInWithGoogle };
