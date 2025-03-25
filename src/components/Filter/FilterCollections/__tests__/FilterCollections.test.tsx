import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import FilterCollections from '..';

// Constants
import { FILTER_COLLECTIONS } from '@/constants';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: () => new URLSearchParams(),
  useRouter: () => ({
    replace: jest.fn(),
    push: jest.fn(),
  }),
}));

describe('FilterCollections Component', () => {
  it('renders correctly with collections', () => {
    const { getByText } = render(<FilterCollections />);

    FILTER_COLLECTIONS.forEach((collection) => {
      expect(getByText(collection.label)).toBeInTheDocument();
    });
  });

  it('changes selected collection on click', async () => {
    const { getByRole } = render(<FilterCollections />);

    const collectionButton = getByRole('button', {
      name: FILTER_COLLECTIONS[0].label,
    });

    await userEvent.click(collectionButton);

    expect(collectionButton).toHaveClass('text-primary-500');

    await userEvent.click(collectionButton);

    expect(collectionButton).toBeInTheDocument();
  });
});
