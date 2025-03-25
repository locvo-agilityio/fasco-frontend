import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import FilterBrands from '..';

// Constants
import { FILTER_BRANDS } from '@/constants';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: () => new URLSearchParams(),
  useRouter: () => ({
    replace: jest.fn(),
    push: jest.fn(),
  }),
}));

describe('FilterBrands Component', () => {
  it('renders correctly with brands', () => {
    const { getByText } = render(<FilterBrands />);

    FILTER_BRANDS.forEach((brand) => {
      expect(getByText(brand.label)).toBeInTheDocument();
    });
  });

  it('changes selected brand on click', async () => {
    const { getByRole } = render(<FilterBrands />);

    const brandButton = getByRole('button', { name: FILTER_BRANDS[0].label });

    await userEvent.click(brandButton);

    expect(brandButton).toHaveClass('text-primary-500');

    await userEvent.click(brandButton);

    expect(brandButton).toBeInTheDocument();
  });
});
