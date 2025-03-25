import type { Meta, StoryObj } from '@storybook/react';

// Components
import CardProduct from '.';

const meta = {
  title: 'Components/Card/CardProduct',
  component: CardProduct,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    img: 'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3sbmx26g0cc16.webp',
    title: 'Sofa',
    priceSale: 5000,
    price: 9550,
    id: '1',
  },
};
