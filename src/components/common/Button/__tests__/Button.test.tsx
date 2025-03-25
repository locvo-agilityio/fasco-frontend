import { render } from '@testing-library/react';

import Button from '..';

describe('Button', () => {
  it('should render snapshot', () => {
    const { container } = render(<Button>Default Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it('renders with primary color', () => {
    const { getByRole } = render(<Button color="primary">Primary</Button>);

    const buttonPrimary = getByRole('button');

    expect(buttonPrimary).toHaveClass(
      'text-secondary-400 border border-secondary-100 disabled:opacity-50',
    );
  });
});
