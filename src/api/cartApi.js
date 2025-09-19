import axios from "axios";

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8080/api/cart";

// Thêm giỏ hàng
export const addToCart = async (data) => {
  return await axios.post(`${API_URL}/add`, data);
};

// Cập nhật giỏ hàng
export const updateCart = async (cartId, data) => {
  return await axios.put(`${API_URL}/update?cartId=${cartId}`, data);
};

// Xoá giỏ hàng
export const deleteCart = async (cartId) => {
  return await axios.delete(`${API_URL}/delete?cartId=${cartId}`);
};

// Lấy giỏ hàng theo userId
export const getCartByUserId = async (userId) => {
  return await axios.get(`${API_URL}/get/${userId}`);
};

// ✅ Lấy danh sách ảnh sản phẩm
export const getProductImages = async (productId) => {
  return await axios.get(`${API_URL}/product/${productId}/images`);
};

// ✅ Lấy danh sách product variant
export const getProductVariants = async (productId) => {
  return await axios.get(`${API_URL}/product/${productId}/variants`);
};
export const updateCartItem = async (cartId, cartItemId, itemData) => {
  try {
    const response = await axios.put(
      `${API_URL}/${cartId}/item/${cartItemId}`,
      itemData
    );
    return response.data; // trả về CartItemResponse
  } catch (error) {
    console.error("Error updating cart item:", error);
    throw error;
  }
};
