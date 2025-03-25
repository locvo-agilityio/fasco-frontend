import type { Meta, StoryObj } from '@storybook/react';

// Components
import CardNewArrival from '.';

const meta = {
  title: 'Components/Card/CardNewArrival',
  component: CardNewArrival,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardNewArrival>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    img: 'https://m.media-amazon.com/images/I/51JpA4Olu4L._AC_UL1157_.jpg',
    title: 'Sofa',
    price: 9550,
    brand: 'Al Karam',
    rating: 5,
    reviews: 4100,
    id: '1',
  },
};
