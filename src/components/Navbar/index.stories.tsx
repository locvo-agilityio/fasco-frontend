import type { Meta, StoryObj } from '@storybook/react';

// Components
import Navbar from '.';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  render: (args) => (
    <div className="w-[1280px]">
      <Navbar {...args} />
    </div>
  ),
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Authenticated: Story = {
  args: {
    isAuthenticated: true,
  },
};
