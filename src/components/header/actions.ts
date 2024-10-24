import axiosInstance from "@/src/libs/axiosInstance";

export const fetchCategoryData2 = async () => {
  const response = await axiosInstance.get("/api/categories/index", {
    params: {
      page: 1,
      main_category: 1,
    },
  });
  return response.data.data.data;
};
