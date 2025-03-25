// Utils
import { cn } from '@/utils';

// Constants
import { PRODUCT_COLUMNS } from '@/constants';

const TableHeaderProduct = () => (
  <tr className="bg-transparent border-b-1 border-primary-100 pb-9">
    {PRODUCT_COLUMNS.map(({ key, label }) => (
      <th
        key={key}
        className={cn(
          'border-b-1 w-96 border-primary-100 pb-10 font-volkhov text-2md font-normal',
          label === 'Total' ? 'text-right' : 'text-left',
          label !== 'Product' && label !== 'Total' && 'text-center',
        )}
      >
        {label}
      </th>
    ))}
  </tr>
);

export default TableHeaderProduct;
