import type { Meta, StoryObj } from '@storybook/react';

// Components
import Footer from '.';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  render: () => (
    <div className="w-[1280px]">
      <Footer />
    </div>
  ),
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
