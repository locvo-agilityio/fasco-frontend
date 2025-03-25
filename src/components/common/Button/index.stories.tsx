import { StoryObj, Meta } from '@storybook/react';

// Components
import Button from '.';

const meta = {
  title: 'Components/Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },

  render: (args) => (
    <div className="w-32">
      <Button {...args}> Click</Button>
    </div>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    color: 'primary',
    variant: 'ghost',
    size: 'lg',
  },
};

export const Secondary: Story = {
  args: {
    color: 'primary',
    variant: 'ghost',
    size: 'lg',
    className: 'text-foreground-500 border-primary-300',
  },
};

export const Ternary: Story = {
  args: {
    color: 'primary',
    variant: 'ghost',
    size: 'md',
    className: 'text-foreground-500 py-2',
  },
};

export const Outlined: Story = {
  args: {
    color: 'primary',
    size: 'md',
    variant: 'ghost',
    className:
      'border-none data-[hover=true]:!bg-primary-300 data-[hover=true]:!text-primary-foreground',
  },
};
