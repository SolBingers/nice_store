import { Phone, PhoneSpec } from '../components/types/types';
import { client } from '../utils/fetchClient';


export const getAllPhones = async (): Promise<Phone[]> =>
  client.get('/products');

export const getPhoneById = (id: string): Promise<PhoneSpec> =>
  client.get(`/products/${id}`);

export const getPhonesByType = (
  type: 'discount' | 'new',
): Promise<Phone[]> => {

  return client.get(`/products/${type}`);
};

export const getPhoneRecomended = (id: string): Promise<Phone[]> =>
  client.get(`/products/${id}/recomended`);
