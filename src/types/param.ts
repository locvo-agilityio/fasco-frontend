export interface ISearchParams {
  size: string;
  color: string;
  brand: string;
  collection: string;
  price: string;
  page: number;
  limit: number;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
