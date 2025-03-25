import { fireEvent, render, waitFor } from '@testing-library/react';

// Components
import DrawerCart from '..';

// Mocks
import { MOCK_CARTS } from '@/__mocks__';

// Actions
import { checkoutCart } from '@/actions';

jest.mock('@/contexts', () => ({
  useCart: jest.fn(() => ({
    cart: MOCK_CARTS,
    updateCart: jest.fn(),
    removeCart: jest.fn(),
  })),
}));

jest.mock('@heroui/react', () => ({
  ...jest.requireActual('@heroui/react'),
  useDisclosure: jest.fn(() => ({
    onOpen: jest.fn(),
    onClose: jest.fn(),
    isOpen: true,
  })),
}));

jest.mock('@/actions', () => ({
  checkoutCart: jest.fn(() => Promise.resolve(MOCK_CARTS)),
  updateQuantityProduct: jest.fn(() => Promise.resolve({})),
}));

describe('DrawerCart component', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const { container } = render(<DrawerCart />);
    expect(container).toMatchSnapshot();
  });

  it('handle click checkout', async () => {
    const { getByRole } = render(<DrawerCart />);

    const checkoutButton = getByRole('button', { name: 'Checkout' });

    await waitFor(() => {
      fireEvent.click(checkoutButton);
    });

    await waitFor(() => {
      expect(checkoutCart).toHaveBeenCalled();
    });
  });
});
