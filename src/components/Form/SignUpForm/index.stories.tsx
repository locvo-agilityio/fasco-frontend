import type { Meta, StoryObj } from '@storybook/react';

// Components
import SignUpForm from '.';

const meta = {
  title: 'Components/SignUpForm',
  component: SignUpForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => (
    <div className="w-[628px]">
      <SignUpForm />
    </div>
  ),
} satisfies Meta<typeof SignUpForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
