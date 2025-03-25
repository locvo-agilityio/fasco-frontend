import { render } from '@testing-library/react';

// Components
import CardProduct from '..';

const props = {
  img: 'https://m.media-amazon.com/images/I/51JpA4Olu4L._AC_UL1157_.jpg',
  title: 'Sofa',
  price: 9550,
  priceSale: 5000,
  brand: 'Al Karam',
  rating: 5,
  reviews: 4100,
  id: '1',
  colors: [{ name: 'Black', code: '#000000' }],
};

describe('CardProduct', () => {
  it('should render correctly', () => {
    const { container } = render(<CardProduct {...props} />);

    expect(container).toMatchSnapshot();
  });
});
