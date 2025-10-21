import {
  registerShopApi,
  getShopByIdApi,
  getShopByUserIdApi,
} from "../api/shopApi";

// Đăng ký shop
export const registerShop = async (formData) => {
  try {
    const res = await registerShopApi(formData);
    return res.data;
  } catch (error) {
    console.error("Lỗi khi đăng ký shop:", error);
    throw error;
  }
};

// Lấy shop theo shopId
export const getShopById = async (shopId) => {
  if (!shopId) {
    throw new Error("shopId is required");
  }
  try {
    const res = await getShopByIdApi(shopId);
    return res.data;
  } catch (error) {
    console.error("Lỗi khi lấy shop theo ID:", error);
    throw error;
  }
};

// Lấy shop theo userId
export const getShopByUserId = async (userId) => {
  if (!userId) {
    throw new Error("userId is required");
  }
  try {
    const res = await getShopByUserIdApi(userId);
    return res.data;
  } catch (error) {
    console.error("Lỗi khi lấy shop theo userId:", error);
    throw error;
  }
};
