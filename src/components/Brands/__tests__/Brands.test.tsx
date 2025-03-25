import { render } from '@testing-library/react';

// Components
import Brands from '..';

describe('Brands', () => {
  it('should render correctly', () => {
    const { container } = render(<Brands />);

    expect(container).toMatchSnapshot();
  });
});
