import { render } from '@testing-library/react';

// Components
import Navbar from '..';

// Mocks
import { MOCK_CARTS } from '@/__mocks__';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

jest.mock('@/contexts', () => ({
  useCart: jest.fn(() => ({
    cart: MOCK_CARTS,
    updateCart: jest.fn(),
    removeCart: jest.fn(),
  })),
}));

describe('Navbar', () => {
  it('should render with no authentication', () => {
    const { container } = render(<Navbar />);

    expect(container).toBeInTheDocument();
  });

  it('should render with authentication', () => {
    const { container } = render(<Navbar isAuthenticated={true} />);

    expect(container).toBeInTheDocument();
  });
});
