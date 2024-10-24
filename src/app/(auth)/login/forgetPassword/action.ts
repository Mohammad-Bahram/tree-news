import axiosInstance from "@/src/libs/axiosInstance";
import Cookies from "js-cookie";

const token = Cookies.get("authToken");

export const sendResetRequest = async (user: {
  username: string;
  phone_number: string;
}) => {
  const response = await axiosInstance.post("/api/request_reset", user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
