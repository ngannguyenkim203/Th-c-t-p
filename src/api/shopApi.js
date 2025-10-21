import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/shop';

// export const getShopByUserId = async (userId) => {
//   const response = await axios.get(`${BASE_URL}/user/${userId}`);
//   return response.data;
// };

export const registerShopApi = async (formData) => {
  return axios.post(`${BASE_URL}/register`, formData, {
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
  const res = await axios.get(`${BASE_URL}/${shopId}`);
  return res.data;
};

export const getShopByUserIdApi = async (userId) => {
  if (!userId) {
    throw new Error("userId is required");
  }
  const res = await axios.get(`${BASE_URL}/user/${userId}`);
  return res.data;
};
