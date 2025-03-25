import type { Meta, StoryObj } from '@storybook/react';

// Components
import CustomerSay from '.';

const meta = {
  title: 'Components/CustomerSay',
  component: CustomerSay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  render: () => (
    <div className="w-[1280px]">
      <CustomerSay />
    </div>
  ),
} satisfies Meta<typeof CustomerSay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
