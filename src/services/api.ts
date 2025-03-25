import { BASE_URL } from '@/constants';

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const dataError = await response.json();

    throw new Error(dataError.error.message);
  }
  return response.json();
};

const fetchData = async <T>(
  path: string,
  options: RequestInit,
): Promise<{ data: T; total?: number }> => {
  const response = await fetch(path, options);
  const data = await handleResponse<T>(response);

  return { data };
};

export const get = async <T>(
  path: string,
  configOptions?: RequestInit,
): Promise<{ data: T }> => {
  const url = `${BASE_URL}${path}`;

  return fetchData<T>(url, configOptions || {});
};

export const post = async <T>(
  path: string,
  body: object,
  configOptions?: RequestInit,
): Promise<T> => {
  const options: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...configOptions,
  };
  const response = await fetchData<T>(`${BASE_URL}${path}`, options);

  return response.data;
};

export const put = async <T>(
  path: string,
  body: object,
  configOptions?: RequestInit,
): Promise<T> => {
  const options: RequestInit = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...configOptions,
  };
  const response = await fetchData<T>(`${BASE_URL}${path}`, options);

  return response.data;
};

const apiClient = { get, post, put };

export { apiClient };
