import axiosInstance from "@/src/libs/axiosInstance";

export interface CATEGORY_DATA {
  id: number;
  name: string;
}

export const fetchCategoryData = async () => {
  const response = await axiosInstance.get("/api/categories/index", {
    params: {
      page: 1,
      main_category: true,
    },
  });
  console.log(response.data);

  return response.data.data.data;
};
