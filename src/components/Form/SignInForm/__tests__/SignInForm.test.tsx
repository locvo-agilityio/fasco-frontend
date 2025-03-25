import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react';
import { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import userEvent from '@testing-library/user-event';

// Components
import SignInForm from '..';

// Constants
import { ERROR_MESSAGES, ToastType } from '@/constants';

// Actions
import { login } from '@/actions';

const mockRouter: NextRouter = {
  basePath: '',
  pathname: '',
  route: '',
  query: {},
  asPath: '',
  isReady: true,
  isPreview: false,
  isLocaleDomain: false,
  isFallback: false,
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  forward: jest.fn(),
};

jest.mock('@heroui/react', () => ({
  ...jest.requireActual('@heroui/react'),
  addToast: jest.fn(),
}));

jest.mock('@/actions', () => ({
  login: jest.fn(() => ({
    status: ToastType.SUCCESS,
    message: 'Login successful',
  })),
}));

let renderResult: RenderResult;

describe('SignInForm component', () => {
  beforeEach(() => {
    renderResult = render(
      <RouterContext.Provider value={mockRouter}>
        <SignInForm />
      </RouterContext.Provider>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    expect(renderResult.container).toMatchSnapshot();
  });

  it('should render error message', async () => {
    const { getAllByLabelText, getByText } = renderResult;

    const emailInput = getAllByLabelText('Email')[0];
    const passwordInput = getAllByLabelText('Password')[0];

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);

    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(getByText(ERROR_MESSAGES.INVALID_EMAIL)).toBeInTheDocument();
      expect(getByText(ERROR_MESSAGES.INVALID_PASSWORD)).toBeInTheDocument();
    });
  });

  it('should call login action', async () => {
    const { getAllByLabelText, getByRole } = renderResult;

    const emailInput = getAllByLabelText('Email')[0];
    const passwordInput = getAllByLabelText('Password')[0];

    fireEvent.change(emailInput, { target: { value: 'admin@gmail.com' } });
    fireEvent.blur(emailInput);

    fireEvent.change(passwordInput, { target: { value: '1@Dzxcvb' } });
    fireEvent.blur(passwordInput);

    const signInButton = getByRole('button', { name: 'Sign In' });

    await waitFor(() => {
      userEvent.click(signInButton);
    });

    await waitFor(async () => {
      expect(signInButton).not.toBeDisabled();
      expect(login).toHaveBeenCalled();
    });
  });

  it('should call login action with incorrect password and email', async () => {
    (login as jest.Mock).mockResolvedValueOnce({
      status: ToastType.ERROR,
      message: 'Invalid email or password',
    });

    const { getAllByLabelText, getByRole } = renderResult;

    const emailInput = getAllByLabelText('Email')[0];
    const passwordInput = getAllByLabelText('Password')[0];

    fireEvent.change(emailInput, { target: { value: 'admin@gmail.com' } });
    fireEvent.blur(emailInput);

    fireEvent.change(passwordInput, { target: { value: '1@Dzxcvb' } });
    fireEvent.blur(passwordInput);

    const signInButton = getByRole('button', { name: 'Sign In' });

    await waitFor(() => {
      userEvent.click(signInButton);
    });

    await waitFor(() => {
      expect(signInButton).not.toBeDisabled();
      expect(login).toHaveBeenCalled();
    });
  });
});
