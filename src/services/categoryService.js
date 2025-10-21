import {
  getAllCategoriesApi,
  getCategorySystemApi,
  updateCategoryApi,
  deleteCategoryApi,
  createCategoryApi,
  getCategoryByIdApi,
} from "../api/categoryApi";

// Lấy danh sách category từ BE
export const fetchCategories = async () => {
  try {
    const res = await getAllCategoriesApi();
    return res.data;
  } catch (error) {
    console.error("Lỗi khi fetch dữ liệu category:", error);
    throw error;
  }
};

// Lấy danh sách category system từ file tĩnh
export const fetchCategorieSystem = async () => {
  try {
    const res = await getCategorySystemApi();
    if (!res.ok) throw new Error("Failed to fetch category data");
    return await res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

// Cập nhật category
export const updateCategory = async (categoryId, formData) => {
  try {
    const res = await updateCategoryApi(categoryId, formData);
    return res.data;
  } catch (error) {
    console.error("Lỗi khi cập nhật category:", error);
    throw error;
  }
};

// Xoá category
export const deleteCategory = async (categoryId) => {
  try {
    const res = await deleteCategoryApi(categoryId);
    return res.data;
  } catch (error) {
    console.error("Lỗi khi xoá category:", error);
    throw error;
  }
};

// Tạo category mới
export const createCategory = async (formData) => {
  try {
    const res = await createCategoryApi(formData);
    return res.data;
  } catch (error) {
    console.error("Lỗi khi tạo category:", error);
    throw error;
  }
};

// Lấy category theo id
export const getCategoryById = async (categoryId) => {
  try {
    const res = await getCategoryByIdApi(categoryId);
    return res.data;
  } catch (error) {
    console.error("Lỗi khi lấy category:", error);
    throw error;
  }
};
