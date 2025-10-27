// import axios from 'axios';
import api from "./axiosConfig";

// const BASE_URL = 'http://localhost:8081/api/shop';
const API_URL = process.env.REACT_APP_API_URL;

// export const getShopByUserId = async (userId) => {
//   const response = await axios.get(`${BASE_URL}/user/${userId}`);
//   return response.data;
// };

export const registerShopApi = async (formData) => {
  return api.post(`${API_URL}/shop/register`, formData, {
    // headers: { 'Content-Type': 'multipart/form-data' },
  });
};

// export const getShopById = async (shopId) => {
//   const res = await axios.get(`${BASE_URL}/${shopId}`);
//   return res.data;
// };

export const getShopByIdApi = async (shopId) => {
  if (!shopId) {
    throw new Error("shopId is required");
  }
  const res = await api.get(`${API_URL}/shop/${shopId}`);
  return res.data;
};

export const getShopByUserIdApi = async (userId) => {
  if (!userId) {
    throw new Error("userId is required");
  }
  const res = await api.get(`${API_URL}/shop/user/${userId}`);
  return res.data;
};
