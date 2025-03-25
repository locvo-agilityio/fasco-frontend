import type { Meta, StoryObj } from '@storybook/react';

// Components
import Brands from '.';

const meta = {
  title: 'Components/Brands',
  component: Brands,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Brands>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
