import { ProductItem } from '../types/ProductItem';
import { ProductItemSpec } from '../types/ProductItemSpec';
import { client } from '../utils/fetchClient';

type Response = {
  data: ProductItem[];
  pages: number;
};

export const getAllProducts = async (
  category: string,
  search: string,
): Promise<Response> => {
  return client.get(`/products${category}?${search}`);
};

export const getSearchProducts = async (search: string): Promise<Response> => {
  return client.get(`/products?${search}`);
};

export const getItemById = (id: string): Promise<ProductItemSpec> =>
  client.get(`/products/${id}`);

export const getProductsByType = (
  type: 'discount' | 'new',
): Promise<ProductItem[]> => {
  return client.get(`/products/${type}`);
};

export const getItemRecomended = (id: string): Promise<ProductItem[]> =>
  client.get(`/products/${id}/recommended`);

export const getAllOrders = (userId: string): Promise<ProductItem[]> =>
  client.get(`/orders/${userId}`);
