const BASE_URL = 'https://nice-store-api.onrender.com';

export const client = {
  get: async <T>(
    url: string,
  ): Promise<T> => {
    const path = `${BASE_URL}${url}`;

    const response = await fetch(path);
    if (!response.ok)
      throw new Error('Cant load data');

    return await response.json();
  },
  post: async <T>(
    url: string,
    data: unknown = null,
  ): Promise<T> => {
    const path = `${BASE_URL}${url}`;

    const options: RequestInit = { method: 'POST' };

    if (data) {
      options.body = JSON.stringify(data);
      options.headers = {
        'Content-Type': 'application/json; charset=UTF-8',
      };
    }

    const response = await fetch(path, options);

    if (!response.ok) {
      throw new Error('Cant load data');
    }

    return await response.json();
  }
};
