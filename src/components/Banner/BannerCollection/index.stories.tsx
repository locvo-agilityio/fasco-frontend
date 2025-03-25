import type { Meta, StoryObj } from '@storybook/react';

// Components
import BannerCollection from '.';

const meta = {
  title: 'Components/BannerCollection',
  component: BannerCollection,
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <div className="w-[1920px]">
      <BannerCollection />
    </div>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof BannerCollection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
