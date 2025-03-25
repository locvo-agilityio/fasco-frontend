import { render } from '@testing-library/react';

// Components
import BannerInstagram from '..';

describe('BannerInstagram', () => {
  it('should render correctly', () => {
    const { container } = render(<BannerInstagram />);

    expect(container).toMatchSnapshot();
  });
});
