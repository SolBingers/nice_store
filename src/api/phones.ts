import { Phone, PhoneSpec } from '../components/types/types';
import { client } from '../utils/fetchClient';


export const getAllPhones = async (): Promise<Phone[]> =>
  client.get('/products');

export const getPhoneById = (id: string): Promise<PhoneSpec> =>
  client.get(`/products/${id}`);

export const getPhonesByType = (
  type?: 'discount' | 'new',
  options: { page?: number; count?: number; sort?: 'newest' | 'oldest' } = {}
): Promise<Phone[]> => {
  const searchParams: [string, string][] = [];

  if (options.page) searchParams.push(['page', options.page.toString()]);
  if (options.count) searchParams.push(['count', options.count.toString()]);
  if (options.sort) searchParams.push(['sort', options.sort]);

  return client.get(`/products/${type}`, searchParams);
};

export const getPhoneRecomended = (id: string): Promise<Phone[]> =>
  client.get(`/products/${id}/recomended`);
  

