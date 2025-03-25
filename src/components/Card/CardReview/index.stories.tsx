import type { Meta, StoryObj } from '@storybook/react';

// Components
import CardReview from '.';

import ImageReviewSecondary from '../../../../public/assets/image-review-secondary.webp';

const meta = {
  title: 'Components/Card/CardReview',
  component: CardReview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardReview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customClass:
      'w-[646px] h-[300px] py-10 px-12 flex flex-row items-center gap-4 border-none',
    customImageClass: 'flex items-center w-[377px] h-[193px] rounded-regular',
    title: 'James K.',
    rating: 5,
    image: ImageReviewSecondary,
  },
};
