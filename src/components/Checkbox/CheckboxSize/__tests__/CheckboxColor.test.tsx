import { render, fireEvent } from '@testing-library/react';

// Components
import CheckboxSize from '..';

const mockSizes = [
  { id: 1, size: 'S' },
  { id: 2, size: 'M' },
  { id: 3, size: 'L' },
];

const onFilterChange = jest.fn();

describe('CheckboxSize Component', () => {
  it('renders correctly with sizes', () => {
    const { getByText, getByTitle } = render(
      <CheckboxSize sizes={mockSizes} />,
    );

    expect(getByText('Sizes: S')).toBeInTheDocument();
    mockSizes.forEach((value) => {
      expect(getByTitle(value.size)).toBeInTheDocument();
    });
  });

  it('changes selected color on click', () => {
    const { getByText, getByTitle } = render(
      <CheckboxSize sizes={mockSizes} onFilterChange={onFilterChange} />,
    );

    const sizeRadio = getByTitle('L');
    fireEvent.click(sizeRadio);

    expect(onFilterChange).toHaveBeenCalledWith('L');
    expect(getByText('Sizes: L')).toBeInTheDocument();
  });
});
