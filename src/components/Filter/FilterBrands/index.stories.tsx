import type { Meta, StoryObj } from '@storybook/react';

// Components
import FilterBrands from '.';

const meta = {
  title: 'Components/Filter/FilterBrands',
  component: FilterBrands,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
  render: () => (
    <div className="max-w-80">
      <FilterBrands />
    </div>
  ),
} satisfies Meta<typeof FilterBrands>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
