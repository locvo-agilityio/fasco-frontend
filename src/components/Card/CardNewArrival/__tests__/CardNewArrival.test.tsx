import { render } from '@testing-library/react';

// Components
import CardNewArrival from '..';

const props = {
  img: 'https://m.media-amazon.com/images/I/51JpA4Olu4L._AC_UL1157_.jpg',
  title: 'Sofa',
  price: 9550,
  brand: 'Al Karam',
  rating: 5,
  reviews: 4100,
  id: '1',
};

describe('CardNewArrival', () => {
  it('should render correctly', () => {
    const { container } = render(<CardNewArrival {...props} />);

    expect(container).toMatchSnapshot();
  });
});
