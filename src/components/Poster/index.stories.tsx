import { StoryObj, Meta } from '@storybook/react';

// Components
import Poster from '.';

const meta = {
  title: 'Components/Poster',
  component: Poster,
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <div className="w-[1440px]">
      <Poster />
    </div>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof Poster>;

export default meta;

type Story = StoryObj<typeof Poster>;

export const Default: Story = {};
