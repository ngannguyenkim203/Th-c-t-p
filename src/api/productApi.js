import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/products';

export const fetchProducts = async (page = 1, pageSize = 5) => {
  try {
    const response = await axios.get(`${BASE_URL}/getAllProduct`);
    const allProducts = response.data;

    const totalItems = allProducts.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const paginatedData = allProducts.slice((page - 1) * pageSize, page * pageSize);

    return {
      data: paginatedData,
      totalItems,
      totalPages
    };
  } catch (error) {
    console.error('Lỗi khi fetch dữ liệu sản phẩm:', error);
    throw error;
  }

};

export const createProduct = async (formData) => {
  return await axios.post(`${BASE_URL}/add`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateProduct = async (productId, formData) => {
  return axios.put(`${BASE_URL}/${productId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const deleteProduct = async (productId) => {
  return axios.delete(`${BASE_URL}/${productId}`);
};


export const getProductById = async (productId) => {
  const res = await axios.get(`${BASE_URL}/${productId}`);
  return res.data;
};

export const getNewProducts = async () => {
  const response = await axios.get(`${BASE_URL}/new`);
  return response.data;
};


export const getBestSellers = async () => {
  const res = await fetch("/data/best-sellers.json");
  return await res.json();
};

export const getSuggestedProducts = async () => {
  const res = await fetch("/data/suggestions.json");
  return await res.json();
};
