import { render } from '@testing-library/react';

// Components
import Breadcrumbs from '..';

// Constants
import { BREADCRUMBS_CART } from '@/constants';

describe('Breadcrumbs', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Breadcrumbs breadcrumbs={BREADCRUMBS_CART} />,
    );

    expect(container).toMatchSnapshot();
  });
});
