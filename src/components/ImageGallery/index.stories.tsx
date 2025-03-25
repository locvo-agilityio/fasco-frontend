import type { Meta, StoryObj } from '@storybook/react';

// Components
import ImageGallery from '.';

// Mocks
import { MOCK_IMAGE_GALLERY } from '@/__mocks__';

const meta = {
  title: 'Components/ImageGallery',
  component: ImageGallery,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  render: (args) => (
    <div className="w-[1280px]">
      <ImageGallery {...args} />
    </div>
  ),
} satisfies Meta<typeof ImageGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: MOCK_IMAGE_GALLERY,
  },
};
