import { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';

// Components
import NumberInput from '@/components/NumberInput';
import InfoProduct from '../InfoProduct';

// Types
import { ICart } from '@/types';

// Utils
import { formatNumber } from '@/utils';

// Contexts
import { useCart } from '@/contexts';

interface ITableRowProps {
  userId: string;
  row: ICart;
  onChangeQuantity: ({ productId, quantity }: ICart) => void;
}

const TableRowProduct = ({ row, onChangeQuantity }: ITableRowProps) => {
  const { removeProductFromCart } = useCart();

  const handleQuantity = useCallback(
    (value: number) => {
      onChangeQuantity({ productId: row.productId, quantity: value } as ICart);
    },
    [onChangeQuantity, row.productId],
  );

  const handleRemoveProduct = useCallback(() => {
    removeProductFromCart({
      productId: row.productId,
      color: row.color,
      size: row.size,
    } as ICart);
  }, [removeProductFromCart, row.color, row.productId, row.size]);

  return (
    <tr className="bg-white">
      <td className="font-volkhov w-[544px] text-2md border-b border-primary-100 px-4 py-9 align-top">
        <div className="flex items-start">
          <InfoProduct
            image={row.image}
            name={row.name}
            color={row.color}
            onRemove={handleRemoveProduct}
          />
        </div>
      </td>
      <td className="font-volkhov text-2md border-b border-primary-100 px-4 py-9 text-center align-top">
        ${formatNumber(row.priceSale || row.price)}
      </td>
      <td className="font-volkhov text-2md border-b border-primary-100 px-4 py-9 text-center align-top">
        <div className="flex justify-center">
          <NumberInput
            min={row.quantity}
            max={row.totalQuantity}
            onChange={handleQuantity}
          />
        </div>
      </td>
      <td className="font-volkhov text-2md border-b border-primary-100 px-4 py-9 text-right align-top">
        ${formatNumber(row.total)}
      </td>
    </tr>
  );
};

export default memo(TableRowProduct, isEqual);
