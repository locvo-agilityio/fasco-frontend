import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import FilterColors from '..';

// Constants
import { FILTER_COLORS } from '@/constants';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: () => new URLSearchParams(),
  useRouter: () => ({
    replace: jest.fn(),
    push: jest.fn(),
  }),
}));

describe('FilterColors Component', () => {
  it('renders correctly with colors', () => {
    const { getByTitle } = render(<FilterColors />);

    FILTER_COLORS.forEach((color) => {
      expect(getByTitle(color.name)).toBeInTheDocument();
    });
  });

  it('changes selected color on click', async () => {
    const { getByTitle } = render(<FilterColors />);

    const colorButton = getByTitle(FILTER_COLORS[0].name);

    await userEvent.click(colorButton);

    expect(colorButton).toHaveClass('border-primary-500');

    await userEvent.click(colorButton);

    expect(colorButton).toBeInTheDocument();
  });
});
