import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/products';

export const getAllProductsApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getAllProduct`);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi fetch dữ liệu sản phẩm:', error);
    throw error;
  }

};

export const createProductApi = async (formData) => {
  return await axios.post(`${BASE_URL}/add`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateProductApi = async (productId, formData) => {
  return axios.put(`${BASE_URL}/${productId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const deleteProductApi = async (productId) => {
  return axios.delete(`${BASE_URL}/${productId}`);
};


export const getProductByIdApi = async (productId) => {
  const res = await axios.get(`${BASE_URL}/${productId}`);
  return res.data;
};

export const getNewProductsApi = async () => {
  const response = await axios.get(`${BASE_URL}/new`);
  return response.data;
};


export const getBestSellersApi = async () => {
  const res = await fetch("/data/best-sellers.json");
  return await res.json();
};

export const getSuggestedProductsApi = async () => {
  const res = await fetch("/data/suggestions.json");
  return await res.json();
};
