import { render } from '@testing-library/react';

// Components
import CardReview from '..';

import ImageReviewSecondary from '../../../../../public/assets/image-review-secondary.webp';

const props = {
  customClass:
    'w-[646px] h-[300px] py-10 px-12 flex flex-row items-center gap-4 border-none',
  customImageClass: 'flex items-center w-[377px] h-[193px] rounded-regular',
  title: 'James K.',
  rating: 5,
  image: ImageReviewSecondary,
};

describe('CardReview', () => {
  it('should render correctly', () => {
    const { container } = render(<CardReview {...props} />);

    expect(container).toMatchSnapshot();
  });
});
