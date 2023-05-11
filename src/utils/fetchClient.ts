const BASE_URL = 'https://nice-store-api.onrender.com';

type RequestMethod = 'GET'

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  searchParams: string[][] = []
): Promise<T> {
  const options: RequestInit = { method };

  const partlyUrl = new URL(BASE_URL + url);

  const finalUrl = partlyUrl.toString();

  searchParams.forEach((p) => partlyUrl.searchParams.set(p[0], p[1]));

  return fetch(finalUrl, options)
    .then((response) => {
      if (!response.ok)
        throw new Error('Cant load data');

      return response.json();
    });
}

export const client = {
  get: <T>(url: string, searchParams: string[][] = []) => 
    request<T>(url, undefined ,searchParams)
};
