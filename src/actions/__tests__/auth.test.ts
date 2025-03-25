import { redirect } from 'next/navigation';
import { AuthError } from 'next-auth';

// Actions
import {
  signUp,
  login,
  signInWithGitHub,
  signInWithGoogle,
} from '@/actions/auth';

// Auth
import { signIn } from '@/auth';

// Services
import { apiClient } from '@/services';

import {
  AUTH_METHOD,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  ToastType,
  ROUTES,
} from '@/constants';

jest.mock('@/auth', () => ({ signIn: jest.fn() }));
jest.mock('@/services', () => ({ apiClient: { post: jest.fn() } }));
jest.mock('next/navigation', () => ({ redirect: jest.fn() }));

describe('Auth Actions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('signUp', () => {
    it('should sign up successfully and log in', async () => {
      (apiClient.post as jest.Mock).mockResolvedValueOnce({});
      (signIn as jest.Mock).mockResolvedValueOnce({});

      const formData = new FormData();
      formData.append('email', 'test@example.com');
      formData.append('password', 'password123');
      formData.append('firstName', 'Test');
      formData.append('lastName', 'User');

      const response = await signUp(
        {
          message: '',
        },
        formData,
      );

      expect(apiClient.post).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          email: 'test@example.com',
        }),
      );
      expect(signIn).toHaveBeenCalledWith(
        AUTH_METHOD.CREDENTIALS,
        expect.any(Object),
      );
      expect(response).toEqual({
        status: ToastType.SUCCESS,
        message: SUCCESS_MESSAGES.SIGN_UP_SUCCESS,
      });
    });

    it('should return an error if sign-up fails', async () => {
      (apiClient.post as jest.Mock).mockRejectedValueOnce(
        new Error('Sign-up failed'),
      );

      const formData = new FormData();
      formData.append('email', 'test@example.com');
      formData.append('password', 'password123');

      const response = await signUp(
        {
          message: '',
        },
        formData,
      );

      expect(response).toEqual({
        status: ToastType.ERROR,
        message: 'Sign-up failed',
      });
    });
  });

  describe('login', () => {
    it('should log in successfully and redirect', async () => {
      (signIn as jest.Mock).mockResolvedValueOnce({});

      const formData = new FormData();
      formData.append('email', 'test@example.com');
      formData.append('password', 'password123');

      const response = await login(
        {
          message: '',
        },
        formData,
      );

      expect(signIn).toHaveBeenCalledWith(AUTH_METHOD.CREDENTIALS, formData);
      expect(redirect).toHaveBeenCalledWith(ROUTES.HOME);
      expect(response).toEqual({
        status: ToastType.SUCCESS,
        message: SUCCESS_MESSAGES.SIGN_IN_SUCCESS,
      });
    });

    it('should return an error on invalid credentials', async () => {
      (signIn as jest.Mock).mockRejectedValueOnce(
        new AuthError('CredentialsSignIn'),
      );

      const formData = new FormData();
      formData.append('email', 'wrong@example.com');
      formData.append('password', 'wrongpassword');

      const response = await login(
        {
          message: '',
        },
        formData,
      );

      expect(response).toEqual({
        status: ToastType.ERROR,
        message: ERROR_MESSAGES.UNKNOWN_ERROR,
      });
    });
  });

  describe('OAuth sign-ins', () => {
    it('should call signIn with GitHub method', async () => {
      await signInWithGitHub();
      expect(signIn).toHaveBeenCalledWith(AUTH_METHOD.GITHUB);
    });

    it('should call signIn with Google method', async () => {
      await signInWithGoogle();
      expect(signIn).toHaveBeenCalledWith(AUTH_METHOD.GOOGLE);
    });
  });
});
