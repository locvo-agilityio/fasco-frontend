import { render } from '@testing-library/react';

// Components
import Footer from '..';

describe('Footer', () => {
  it('should render correctly', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
