import { Phone, PhoneSpec } from '../components/types/types';
import { client } from '../utils/fetchClient';

interface Params {
  page?: number,
  count?: number,
  sort?: 'newest' | 'oldest',
}

export const getAllPhones = async ({
  page,
  count,
  sort,
}: Params): Promise<Phone[]> => {
  const params = [];
  if (page) {
    params.push(`page=${page}`);
  }
  if (count) {
    params.push(`count=${count}`);
  }
  if (sort) {
    params.push(`sort=${sort}`);
  }

  const query = params ? params.join('&') : '';

  return client.get(`/products?${query}`);
};

export const getPhoneById = (id: string): Promise<PhoneSpec> =>
  client.get(`/products/${id}`);

export const getPhonesByType = (
  type: 'discount' | 'new',
): Promise<Phone[]> => {

  return client.get(`/products/${type}`);
};

export const getPhoneRecomended = (id: string): Promise<Phone[]> =>
  client.get(`/products/${id}/recomended`);
