import type { NextAuthConfig, Session } from 'next-auth';

// Constants
import { ROUTES } from '@/constants';

const isAuthorized = (auth: Session | null, nextUrl: URL) => {
  const isLoggedIn = !!auth?.user;
  const isSignUpPage = nextUrl.pathname === ROUTES.SIGN_UP;
  const isSignInPage = nextUrl.pathname === ROUTES.LOGIN;
  const isShopPage = nextUrl.pathname === ROUTES.SHOP;
  const isCartPage = nextUrl.pathname === ROUTES.CART;

  if (!isLoggedIn && isSignUpPage) {
    return true;
  }

  if (isLoggedIn && isSignInPage) {
    return Response.redirect(new URL(ROUTES.HOME, nextUrl));
  }

  if (!isLoggedIn && isShopPage) {
    return Response.redirect(new URL(ROUTES.LOGIN, nextUrl));
  }

  if (!isLoggedIn && isCartPage) {
    return Response.redirect(new URL(ROUTES.LOGIN, nextUrl));
  }

  return true;
};

export const authConfig = {
  pages: {
    signIn: ROUTES.LOGIN,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      return isAuthorized(auth, nextUrl);
    },
    jwt: async ({ user, token }) => {
      if (token) Object.assign(token, user);

      return token;
    },
    session: ({ session, token }) => {
      Object.assign(session.user, token);

      return session;
    },
  },
  session: {
    maxAge: 60 * 60 * 24,
  },
  trustHost: true,
  providers: [],
} satisfies NextAuthConfig;
