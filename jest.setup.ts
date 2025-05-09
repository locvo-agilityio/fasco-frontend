import '@testing-library/jest-dom';
import 'whatwg-fetch';

import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

jest.mock('next-auth/react', () => {
  const originalModule = jest.requireActual('next-auth/react');
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { username: 'admin', id: 1 },
  };
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(
      () => ({ data: mockSession, status: 'authenticated' }), // return type is [] in v3 but changed to {} in v4
    ),
  };
});
