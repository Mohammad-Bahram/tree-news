import axiosInstance from "@/src/libs/axiosInstance";
import Cookies from "js-cookie";
const token = Cookies.get("authToken");
export const fetchSubtitle = async () => {
  const response = await axiosInstance.get("/api/subtitles/index", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data.data;
};

export const deleteSubtitle = async (id: number) => {
  const response = await axiosInstance.delete("/api/subtitles/destroy", {
    data: {
      subtitle_ids: id,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const addSubtitle = async (sub: SUBTITLE_CREATE) => {
  const response = await axiosInstance.post("/api/subtitles/store", sub, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

interface SUBTITLE_CREATE {
  text: string;
}
