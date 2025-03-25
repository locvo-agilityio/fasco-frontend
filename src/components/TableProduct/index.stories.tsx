import type { Meta, StoryObj } from '@storybook/react';

// Components
import TableProduct from '.';

// Mocks
import { MOCK_CARTS } from '@/__mocks__';

const meta = {
  title: 'Components/TableProduct',
  component: TableProduct,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userId: '',
    rows: MOCK_CARTS,
    onChangeQuantity: () => {},
  },
};
