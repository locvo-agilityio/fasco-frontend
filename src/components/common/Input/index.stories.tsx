import type { Meta, StoryObj } from '@storybook/react';

// Components
import Input from '.';

const meta = {
  title: 'Components/Common/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

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
