export interface ICart {
  productId: string;
  id: string;
  image: string;
  name: string;
  color: string;
  size: string;
  price: number;
  priceSale?: number;
  totalQuantity: number;
  quantity: number;
  total: number;
}
