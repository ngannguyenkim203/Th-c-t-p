import {
    getAllProductsApi,
    createProductApi,
    updateProductApi,
    deleteProductApi,
    getProductByIdApi,
    getNewProductsApi,
    getBestSellersApi,
    getSuggestedProductsApi,
} from '../api/productApi';

// Service xử lý phân trang khi fetch sản phẩm
export const fetchProducts = async (page = 1, pageSize = 5) => {
    try {
        const response = await getAllProductsApi();
        const allProducts = response.data;

        const totalItems = allProducts.length;
        const totalPages = Math.ceil(totalItems / pageSize);
        const paginatedData = allProducts.slice(
            (page - 1) * pageSize,
            page * pageSize
        );

        return {
            data: paginatedData,
            totalItems,
            totalPages,
        };
    } catch (error) {
        console.error('Lỗi khi fetch dữ liệu sản phẩm:', error);
        throw error;
    }
};

export const createProduct = async (formData) => {
    return await createProductApi(formData);
};

export const updateProduct = async (productId, formData) => {
    return await updateProductApi(productId, formData);
};

export const deleteProduct = async (productId) => {
    return await deleteProductApi(productId);
};

export const getProductById = async (productId) => {
    const res = await getProductByIdApi(productId);
    return res.data;
};

export const getNewProducts = async () => {
    const res = await getNewProductsApi();
    return res.data;
};

export const getBestSellers = async () => {
    const res = await getBestSellersApi();
    return await res.json();
};

export const getSuggestedProducts = async () => {
    const res = await getSuggestedProductsApi();
    return await res.json();
};
