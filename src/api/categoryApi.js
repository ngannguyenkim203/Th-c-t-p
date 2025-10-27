import axios from 'axios';

// const BASE_URL = 'http://localhost:8080/api/category';
const API_URL = process.env.REACT_APP_API_URL;

// Lấy danh sách category
export const getAllCategoriesApi = async () => {
    try {
        const response = await axios.get(`${API_URL}/category/getAll`);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi fetch dữ liệu category:', error);
        throw error;
    }
};

export const getCategorySystemApi = async () => {
  try {
    const res = await fetch('/data/categories.json');
    if (!res.ok) throw new Error('Failed to fetch category data');
    return await res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};


export const updateCategoryApi = async (categoryId, formData) => {
    try {
        const response = await axios.put(`${API_URL}/category/update/${categoryId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Lỗi khi cập nhật category:', error);
        throw error;
    }
};

export const deleteCategoryApi = async (categoryId) => {
    try {
        await axios.delete(`${API_URL}/category/delete/${categoryId}`);
    } catch (error) {
        console.error('Lỗi khi xoá category:', error);
        throw error;
    }
};

export const createCategoryApi = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/category/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Lỗi khi tạo category:', error);
        throw error;
    }
};

export const getCategoryByIdApi = async (categoryId) => {
  try {
    const response = await axios.get(`${API_URL}/category/get/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy category:', error);
    throw error;
  }
};
