import type { Meta, StoryObj } from '@storybook/react';

// Components
import SignInForm from '.';

const meta = {
  title: 'Components/SignInForm',
  component: SignInForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => (
    <div className="w-[628px]">
      <SignInForm />
    </div>
  ),
} satisfies Meta<typeof SignInForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
