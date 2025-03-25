import type { Meta, StoryObj } from '@storybook/react';

// Components
import FilterCollections from '.';

const meta = {
  title: 'Components/Filter/FilterCollections',
  component: FilterCollections,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterCollections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
