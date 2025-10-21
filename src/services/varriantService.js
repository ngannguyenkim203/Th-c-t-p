import { getAllVarriantsApi } from "../api/varriantApi";

// Lấy tất cả varriants
export const fetchVarriants = async () => {
  try {
    const res = await getAllVarriantsApi();
    return res.data;
  } catch (error) {
    console.error("Lỗi khi fetch dữ liệu varriants:", error);
    throw error;
  }
};
