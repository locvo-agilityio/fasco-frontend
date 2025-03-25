import type { Meta, StoryObj } from '@storybook/react';

// Components
import BannerSubscribe from '.';

const meta = {
  title: 'Components/BannerSubscribe',
  component: BannerSubscribe,
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <div className="w-[1920px]">
      <BannerSubscribe />
    </div>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof BannerSubscribe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
