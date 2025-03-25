import { render } from '@testing-library/react';

// Components
import Rating from '..';

describe('Rating', () => {
  it('should render correctly', () => {
    const { container } = render(<Rating color="black" />);

    expect(container).toMatchSnapshot();
  });
});
