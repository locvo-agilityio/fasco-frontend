import { render, fireEvent } from '@testing-library/react';

// Components
import CheckboxColor from '..';

const mockColors = [
  { name: 'Red', code: '#FF0000' },
  { name: 'Green', code: '#00FF00' },
  { name: 'Blue', code: '#0000FF' },
];

const onFilterChange = jest.fn();

describe('CheckboxColor Component', () => {
  it('renders correctly with colors', () => {
    const { getByText, getByTitle } = render(
      <CheckboxColor colors={mockColors} />,
    );

    expect(getByText('Colors: Red')).toBeInTheDocument();
    mockColors.forEach((color) => {
      expect(getByTitle(color.name)).toBeInTheDocument();
    });
  });

  it('changes selected color on click', () => {
    const { getByText, getByTitle } = render(
      <CheckboxColor colors={mockColors} onFilterChange={onFilterChange} />,
    );

    const greenRadio = getByTitle('Green');
    fireEvent.click(greenRadio);

    expect(onFilterChange).toHaveBeenCalledWith('Green');
    expect(getByText('Colors: Green')).toBeInTheDocument();
  });
});
