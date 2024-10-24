import axiosInstance from "@/src/libs/axiosInstance";
import Cookies from "js-cookie";
import { headers } from "next/headers";

const token = Cookies.get("authToken");
interface CREATE_CATEGORY {
  name: string;
  category_id: null;
}
export const createCategory = async (category: CREATE_CATEGORY) => {
  const response = await axiosInstance.post("/api/categories/store", category, {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });
  return response.data;
};
export const deleteCategry = async (categoryId: number) => {
  const response = await axiosInstance.delete(`/api/categories/destroy`, {
    data: {
      category_ids: categoryId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
