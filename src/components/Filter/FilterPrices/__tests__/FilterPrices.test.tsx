import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import FilterPrices from '..';

// Constants
import { FILTER_PRICES } from '@/constants';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: () => new URLSearchParams(),
  useRouter: () => ({
    replace: jest.fn(),
    push: jest.fn(),
  }),
}));

describe('FilterPrices Component', () => {
  it('renders correctly with prices', () => {
    const { getByText } = render(<FilterPrices />);

    FILTER_PRICES.forEach((price) => {
      expect(getByText(price.label)).toBeInTheDocument();
    });
  });

  it('changes selected price on click', async () => {
    const { getByRole } = render(<FilterPrices />);

    const priceButton = getByRole('button', {
      name: FILTER_PRICES[0].label,
    });

    await userEvent.click(priceButton);

    expect(priceButton).toHaveClass('text-primary-500');

    await userEvent.click(priceButton);

    expect(priceButton).toBeInTheDocument();
  });
});
