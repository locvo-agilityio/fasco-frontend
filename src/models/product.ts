export interface IProduct {
  id: number;
  documentId: string;
  name: string;
  price: number;
  priceSale: number;
  collections: string;
  sizes: { id: number; size: string }[];
  brands: string;
  quantity: number;
  imageGalleries: { id: number; image: string }[];
  colors: { name: string; code: string }[];
  rating: number;
}
