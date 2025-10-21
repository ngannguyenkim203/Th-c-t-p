import {
    addToCartApi,
    updateCartApi,
    deleteCartApi,
    getCartByUserIdApi,
    getProductImagesApi,
    getProductVariantsApi,
    updateCartItemApi,
} from "../api/cartApi";

// Thêm giỏ hàng
export const addToCart = async (data) => {
    const res = await addToCartApi(data);
    return res.data;
};

// Cập nhật giỏ hàng
export const updateCart = async (cartId, data) => {
    const res = await updateCartApi(cartId, data);
    return res.data;
};

// Xoá giỏ hàng
export const deleteCart = async (cartId) => {
    const res = await deleteCartApi(cartId);
    return res.data;
};

// Lấy giỏ hàng theo userId
export const getCartByUserId = async (userId) => {
    const res = await getCartByUserIdApi(userId);
    return res.data;
};

// Lấy danh sách ảnh sản phẩm
export const getProductImages = async (productId) => {
    const res = await getProductImagesApi(productId);
    return res.data;
};

// Lấy danh sách product variant
export const getProductVariants = async (productId) => {
    const res = await getProductVariantsApi(productId);
    return res.data;
};

// Cập nhật CartItem
export const updateCartItem = async (cartId, cartItemId, itemData) => {
    try {
        const res = await updateCartItemApi(cartId, cartItemId, itemData);
        return res.data; // Trả về CartItemResponse
    } catch (error) {
        console.error("Error updating cart item:", error);
        throw error;
    }
};
