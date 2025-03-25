import { render } from '@testing-library/react';

// Components
import BannerSubscribe from '..';

describe('BannerSubscribe', () => {
  it('should render correctly', () => {
    const { container } = render(<BannerSubscribe />);

    expect(container).toMatchSnapshot();
  });
});
