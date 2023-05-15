import { Phone, PhoneSpec } from '../components/types/types';
import { client } from '../utils/fetchClient';

type Response = {
  data: Phone[],
  pages: number,
};

export const getAllPhones = async (search: string): Promise<Response> => {
  return client.get(`/products/phones?${search}`);
};

export const getAllTablets = async (search: string): Promise<Response> => {
  return client.get(`/products/tablets?${search}`);
};

export const getAllAccessories = async (search: string): Promise<Response> => {
  return client.get(`/products/accessories?${search}`);
};

export const getItemById = (id: string): Promise<PhoneSpec> =>
  client.get(`/products/${id}`);

export const getProductsByType = (
  type: 'discount' | 'new',
): Promise<Phone[]> => {

  return client.get(`/products/${type}`);
};

export const getItemRecomended = (id: string): Promise<Phone[]> =>
  client.get(`/products/${id}/recommended`);
