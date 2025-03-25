'use client';

// Types
import { ICart } from '@/types';

// Components
import TableHeaderProduct from './TableHeaderProduct';
import TableRowProduct from './TableRowProduct';

// Constants
import { ERROR_MESSAGES } from '@/constants';

interface ITableRowProps {
  userId: string;
  rows: ICart[];
  onChangeQuantity: ({ productId, quantity }: ICart) => void;
}

const TableProduct = ({ userId, rows, onChangeQuantity }: ITableRowProps) => (
  <div className="w-full max-h-[670px] overflow-auto scrollbar-default">
    <table className="w-full border-collapse">
      <thead className="bg-white sticky top-0 z-10">
        <TableHeaderProduct />
      </thead>
      <tbody>
        {Boolean(rows.length) ? (
          rows.map((row) => {
            const keyRow = `product-${row.productId}-${row.color}-${row.size}`;

            return (
              <TableRowProduct
                userId={userId}
                key={keyRow}
                row={row}
                onChangeQuantity={onChangeQuantity}
              />
            );
          })
        ) : (
          <tr className="bg-white">
            <td
              className="font-volkhov min-h-32 text-2md px-4 py-9 text-center align-top"
              colSpan={4}
            >
              {ERROR_MESSAGES.EMPTY_CART}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default TableProduct;
