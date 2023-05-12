import { Phone, PhoneSpec } from '../components/types/types';
import { client } from '../utils/fetchClient';

type Response = {
  data: Phone[],
  pages: number,
};

export const getAllPhones = async (search: string): Promise<Response> => {
  return client.get(`/products${search}`);
};

export const getPhoneById = (id: string): Promise<PhoneSpec> =>
  client.get(`/products/${id}`);

export const getPhonesByType = (
  type: 'discount' | 'new',
): Promise<Phone[]> => {

  return client.get(`/products/${type}`);
};

export const getPhoneRecomended = (id: string): Promise<Phone[]> =>
  client.get(`/products/${id}/recommended`);
