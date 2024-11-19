import axios from 'axios';

const BASE_URL = 'http://stageapi.monkcommerce.app/task/products/search?search=Hat&page=2&limit=1';

/**
 * Fetches products from the API with optional search, page, and limit.
 * @param {string} search - Search term for filtering products.
 * @param {number} page - Page number for pagination.
 * @param {number} limit - Number of products per page.
 * @returns {Promise} - API response data.
 */
export const fetchProducts = async (search = '', page = 0, limit = 10) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { search, page, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
