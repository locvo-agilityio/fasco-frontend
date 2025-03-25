import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import FilterSizes from '..';

// Constants
import { FILTER_SIZES } from '@/constants';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: () => new URLSearchParams(),
  useRouter: () => ({
    replace: jest.fn(),
    push: jest.fn(),
  }),
}));

describe('FilterSizes Component', () => {
  it('renders correctly with sizes', () => {
    const { getByText } = render(<FilterSizes />);

    FILTER_SIZES.forEach((size) => {
      expect(getByText(size)).toBeInTheDocument();
    });
  });

  it('changes selected size on click', async () => {
    const { getByRole } = render(<FilterSizes />);

    const sizeButton = getByRole('button', {
      name: FILTER_SIZES[0],
    });

    await userEvent.click(sizeButton);

    expect(sizeButton).toHaveClass('bg-blue-500 text-white');

    await userEvent.click(sizeButton);

    expect(sizeButton).toBeInTheDocument();
  });
});
