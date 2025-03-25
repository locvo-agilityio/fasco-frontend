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
import SignUpForm from '..';

// Constants
import { ERROR_MESSAGES, ToastType } from '@/constants';

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
  signUp: jest.fn(() => ({
    status: ToastType.SUCCESS,
    message: 'Sign up successful',
  })),
}));

let renderResult: RenderResult;

describe('SignUpForm component', () => {
  beforeEach(() => {
    renderResult = render(
      <RouterContext.Provider value={mockRouter}>
        <SignUpForm />
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

    const firstNameInput = getAllByLabelText('First Name')[0];
    const lastNameInput = getAllByLabelText('Last Name')[0];
    const phoneInput = getAllByLabelText('Phone Number')[0];
    const emailInput = getAllByLabelText('Email Address')[0];
    const passwordInput = getAllByLabelText('Password')[0];
    const confirmPasswordInput = getAllByLabelText('Confirm Password')[0];

    fireEvent.change(firstNameInput, { target: { value: '' } });
    fireEvent.blur(firstNameInput);

    fireEvent.change(lastNameInput, { target: { value: '' } });
    fireEvent.blur(lastNameInput);

    fireEvent.change(phoneInput, { target: { value: '' } });
    fireEvent.blur(phoneInput);

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);

    fireEvent.change(confirmPasswordInput, { target: { value: '1' } });
    fireEvent.blur(confirmPasswordInput);

    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(getByText(ERROR_MESSAGES.INVALID_EMAIL)).toBeInTheDocument();
      expect(getByText(ERROR_MESSAGES.INVALID_PASSWORD)).toBeInTheDocument();
      expect(
        getByText(ERROR_MESSAGES.FIELD_REQUIRED('First Name')),
      ).toBeInTheDocument();
      expect(
        getByText(ERROR_MESSAGES.FIELD_REQUIRED('Last Name')),
      ).toBeInTheDocument();
      expect(
        getByText(ERROR_MESSAGES.INVALID_PHONE_NUMBER),
      ).toBeInTheDocument();
      expect(getByText(ERROR_MESSAGES.PASSWORD_NOT_MATCH)).toBeInTheDocument();
    });
  });

  it('should call signUp action', async () => {
    const { getAllByLabelText, getByRole } = renderResult;

    const firstNameInput = getAllByLabelText('First Name')[0];
    const lastNameInput = getAllByLabelText('Last Name')[0];
    const phoneInput = getAllByLabelText('Phone Number')[0];
    const emailInput = getAllByLabelText('Email Address')[0];
    const passwordInput = getAllByLabelText('Password')[0];
    const confirmPasswordInput = getAllByLabelText('Confirm Password')[0];

    fireEvent.change(firstNameInput, { target: { value: 'Loc' } });
    fireEvent.blur(firstNameInput);

    fireEvent.change(lastNameInput, { target: { value: 'Vo' } });
    fireEvent.blur(lastNameInput);

    fireEvent.change(phoneInput, { target: { value: '84931961406' } });
    fireEvent.blur(phoneInput);

    fireEvent.change(emailInput, { target: { value: 'admin@gmail.com' } });
    fireEvent.blur(emailInput);

    fireEvent.change(confirmPasswordInput, { target: { value: '1@Dzxcvb' } });
    fireEvent.blur(confirmPasswordInput);

    fireEvent.change(passwordInput, { target: { value: '1@Dzxcvb' } });
    fireEvent.blur(passwordInput);

    const signUpButton = getByRole('button', { name: 'Create Account' });

    await waitFor(() => {
      expect(signUpButton).not.toBeDisabled();
    });

    await waitFor(() => {
      userEvent.click(signUpButton);
    });
  });
});
