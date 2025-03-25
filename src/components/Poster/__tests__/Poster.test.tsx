import { render } from '@testing-library/react';

// Components
import Poster from '..';

describe('Poster', () => {
  it('should render correctly', () => {
    const { container } = render(<Poster />);

    expect(container).toMatchSnapshot();
  });
});
