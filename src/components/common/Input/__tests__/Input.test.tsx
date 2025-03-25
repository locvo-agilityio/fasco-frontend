import { fireEvent, render } from '@testing-library/react';

// Components
import Input from '..';

describe('Input component', () => {
  const mockOnChange = jest.fn();
  const props = {
    label: 'Email',
    name: 'email',
    placeholder: 'Email',
    onChange: mockOnChange,
  };
  it('render correctly with default props', () => {
    const { container } = render(<Input {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('render correctly with error message', () => {
    const { getByText } = render(
      <Input {...props} isInvalid errorMessage="Field is required" />,
    );
    expect(getByText('Field is required')).toBeInTheDocument();
  });

  it('should call onChange when input value is changed', async () => {
    const { getByPlaceholderText } = render(<Input {...props} />);
    fireEvent.change(getByPlaceholderText('Email'), {
      target: { value: 'user@gmail.com' },
    });

    expect(mockOnChange).toHaveBeenCalled();
  });
});
