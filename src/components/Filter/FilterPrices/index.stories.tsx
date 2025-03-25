import type { Meta, StoryObj } from '@storybook/react';

// Components
import FilterPrices from '.';

const meta = {
  title: 'Components/Filter/FilterPrices',
  component: FilterPrices,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterPrices>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
