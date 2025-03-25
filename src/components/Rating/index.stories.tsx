import type { Meta, StoryObj } from '@storybook/react';

// Components
import Rating from '.';

const meta = {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 5,
  },
};

export const Secondary: Story = {
  args: {
    rating: 3,
    color: 'black',
  },
};
