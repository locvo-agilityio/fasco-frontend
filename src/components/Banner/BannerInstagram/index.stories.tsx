import type { Meta, StoryObj } from '@storybook/react';

// Components
import BannerInstagram from '.';

const meta = {
  title: 'Components/BannerInstagram',
  component: BannerInstagram,
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <div className="w-[1920px]">
      <BannerInstagram />
    </div>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof BannerInstagram>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
