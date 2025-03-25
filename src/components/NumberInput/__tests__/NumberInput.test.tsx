import { fireEvent, render, waitFor } from '@testing-library/react';

// Components
import NumberInput from '..';

const mockOnChange = jest.fn();

describe('NumberInput', () => {
  it('should render correctly', () => {
    const { container } = render(<NumberInput />);

    expect(container).toMatchSnapshot();
  });

  it('handle click button', async () => {
    const { getByTitle } = render(<NumberInput onChange={mockOnChange} />);

    const decreaseButton = getByTitle('Decrease');
    const increaseButton = getByTitle('Increase');

    await waitFor(() => {
      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);
      fireEvent.click(increaseButton);
      fireEvent.click(decreaseButton);
    });

    await waitFor(() => {
      expect(decreaseButton).toBeInTheDocument();
      expect(increaseButton).toBeInTheDocument();
      expect(mockOnChange).toHaveBeenCalled();
    });
  });
});
