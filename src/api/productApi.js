import axios from 'axios';

// const BASE_URL = 'http://localhost:8080/api/products';
const API_URL = process.env.REACT_APP_API_URL;

export const getAllProductsApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/products/getAllProduct`);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi fetch dữ liệu sản phẩm:', error);
    throw error;
  }

};

export const createProductApi = async (formData) => {
  return await axios.post(`${API_URL}/products/add`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateProductApi = async (productId, formData) => {
  return axios.put(`${API_URL}/products/${productId}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export const deleteProductApi = async (productId) => {
  return axios.delete(`${API_URL}/products/${productId}`);
};


export const getProductByIdApi = async (productId) => {
  const res = await axios.get(`${API_URL}/products/${productId}`);
  return res.data;
};

export const getNewProductsApi = async () => {
  const response = await axios.get(`${API_URL}/products/new`);
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
