import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import PasswordInput from '..';

describe('PasswordInput component', () => {
  const mockOnChange = jest.fn();
  const props = {
    label: 'Email',
    name: 'email',
    placeholder: 'Email',
    onChange: mockOnChange,
  };
  it('render correctly with default props', () => {
    const { container } = render(<PasswordInput {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('render correctly with error message', async () => {
    const { getByText, getByRole } = render(
      <PasswordInput {...props} isInvalid errorMessage="Field is required" />,
    );
    const eyeButton = getByRole('button', {
      name: 'toggle password visibility',
    });

    await userEvent.click(eyeButton);

    expect(getByText('Field is required')).toBeInTheDocument();
  });

  it('should call onChange when PasswordInput value is changed', async () => {
    const { getByRole, getByPlaceholderText } = render(
      <PasswordInput {...props} />,
    );

    const eyeButton = getByRole('button', {
      name: 'toggle password visibility',
    });

    await userEvent.click(eyeButton);

    fireEvent.change(getByPlaceholderText('Email'), {
      target: { value: '1@Dzxcvb' },
    });

    await userEvent.click(eyeButton);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
