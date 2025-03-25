import { render } from '@testing-library/react';

// Components
import CardListSkeleton from '../CardListSkeleton';
import CardSkeleton from '../CardSkeleton';

describe('Skeleton component', () => {
  it('should render CartSkeleton correctly', () => {
    const { container } = render(<CardSkeleton />);

    expect(container).toMatchSnapshot();
  });

  it('should render CardListSkeleton correctly', () => {
    const { container } = render(<CardListSkeleton isProduct={true} />);

    expect(container).toMatchSnapshot();
  });
});
