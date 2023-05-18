export function updateSearch(
  params: { [key: string]: string | null },
  searchParams: URLSearchParams, 
  setSearchParams: (searchParams: URLSearchParams) => void,
) {
  if (!params.key) {
    return;
  }

  Object.entries(params).forEach(([key, value]) => {
    if (!value) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
  });

  setSearchParams(searchParams);
}

export function getCasedQuery(query: string) {
  return query.replaceAll(' ', '-').toLowerCase();
}