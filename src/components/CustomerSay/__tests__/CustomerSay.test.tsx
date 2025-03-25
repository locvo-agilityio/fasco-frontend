import { render } from '@testing-library/react';

// Components
import CustomerSay from '..';

describe('CustomerSay', () => {
  it('should render correctly', () => {
    const { container } = render(<CustomerSay />);

    expect(container).toMatchSnapshot();
  });
});
