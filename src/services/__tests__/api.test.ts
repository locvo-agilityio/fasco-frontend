import { BASE_URL } from '@/constants';

// Components
import { get, post, put } from '..';

global.fetch = jest.fn();

describe('API functions', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('should fetch data with query params', async () => {
    const mockResponse = { data: { id: 1, name: 'Test' } };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse.data,
    });

    const result = await get('test-path?q=test');

    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}test-path?q=test`, {});
    expect(result).toEqual(mockResponse);
  });

  it('should post data and return the response', async () => {
    const mockResponse = { data: { id: 1, name: 'Test' } };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse.data,
    });

    const result = await post('test-path', { name: 'Test' });

    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}test-path`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Test' }),
    });
    expect(result).toEqual(mockResponse.data);
  });

  it('should put data and return the response', async () => {
    const mockResponse = { data: { id: 1, name: 'Test Updated' } };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse.data,
    });

    const result = await put('/test-path', { name: 'Test Updated' });

    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/test-path`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Test Updated' }),
    });
    expect(result).toEqual(mockResponse.data);
  });
});
