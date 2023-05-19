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

  post: async <T>(url: string, data: Partial<T>): Promise<T> => {
    const path = `${BASE_URL}${url}`;
  
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    const response = await fetch(path, requestOptions);
    if (!response.ok) {
      throw new Error('Error creating data');
    }
  
    return await response.json();
  },
};
