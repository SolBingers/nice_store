const BASE_URL = 'https://nice-store-api.onrender.com';

export const client = {
  get: async <T>(
    url: string,
    searchParams: [string, string][] = [],
  ): Promise<T> => {
    
    const urlWithParams = new URL(`${BASE_URL}${url}`);

    searchParams.forEach(([key, value]) => {
      urlWithParams.searchParams.set(key, value);
    });

    const response = await fetch(urlWithParams.toString());
    if (!response.ok)
      throw new Error('Cant load data');

    return await response.json();
  },
};
