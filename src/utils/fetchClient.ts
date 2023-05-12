const BASE_URL = 'https://nice-store-api.onrender.com';

export const client = {
  get: async <T>(
    url: string,
  ): Promise<T> => {
    const path = `${BASE_URL}${url}`;
    console.log(path);

    const response = await fetch(path);
    if (!response.ok)
      throw new Error('Cant load data');

    return await response.json();
  },
};
