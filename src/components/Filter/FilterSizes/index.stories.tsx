import type { Meta, StoryObj } from '@storybook/react';

// Components
import FilterSizes from '.';

const meta = {
  title: 'Components/Filter/FilterSizes',
  component: FilterSizes,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterSizes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
