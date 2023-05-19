import { ProductItem, ProductItemSpec, Response } from '../types/types';
import { client } from '../utils/fetchClient';

interface FavoriteItem {
  id: number;
  userId: string;
  productId: string;
}

export const getAllProducts = async (category: string ,search: string): Promise<Response> => {
  return client.get(`/products${category}?${search}`);
};

export const getFavorites = async (userId: string | null | undefined): Promise<Response> => {
  return client.get(`/favorites/${userId}`);
};

export const postFavorite = async (productId: string, userId: string | null | undefined) => {
  const data = { productId, userId };
  return client.post<FavoriteItem>('/favorites/', data);
};

export const removeFavorite = async (id: number | null): Promise<void> => {
  return client.delete('/favorites/', id);
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
