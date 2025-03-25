import type { Meta, StoryObj } from '@storybook/react';

// Components
import PasswordInput from '.';

const meta = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'John Carter',
  },
};

export const HasError: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Error message',
    placeholder: 'John Carter',
    defaultValue: 'Error Data',
  },
};
