import { render } from '@testing-library/react';

// Components
import BannerCollection from '..';

describe('BannerCollection', () => {
  it('should render correctly', () => {
    const { container } = render(<BannerCollection />);

    expect(container).toMatchSnapshot();
  });
});
