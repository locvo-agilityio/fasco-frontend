import NextAuth, { DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

// Config
import { authConfig } from '@/auth.config';

// Constants
import { API_ENDPOINT } from '@/constants';

// Services
import { apiClient } from '@/services';

// Utils
import { SignInSchema } from './utils';

// Types
import { TAuthResponse } from './types';

// Models
import { IUserResponse } from './models';

declare module 'next-auth' {
  interface Session {
    user: IUserResponse & DefaultSession['user'];
  }
}

const CredentialsProvider = Credentials({
  authorize: async (credentials) => {
    const parsed = SignInSchema.safeParse(credentials);
    if (!parsed.success) return null;

    const { email, password } = parsed.data;
    const payload = { identifier: email, email, password };

    try {
      const { user, jwt } = await apiClient.post<TAuthResponse>(
        API_ENDPOINT.SIGN_IN,
        payload,
      );

      if (!user) return null;

      return { ...user, id: user.id?.toString(), jwt };
    } catch (_error) {
      return null;
    }
  },
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
  providers: [GitHub, Google, CredentialsProvider],
});
