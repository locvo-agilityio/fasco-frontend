import type { Meta, StoryObj } from '@storybook/react';

// Components
import FilterColors from '.';

const meta = {
  title: 'Components/Filter/FilterColors',
  component: FilterColors,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterColors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IsFilter: Story = {
  args: {
    isFilter: true,
  },
};
