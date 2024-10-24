import axiosInstance from "@/src/libs/axiosInstance";
import axios from "axios";

export interface LOGIN_DATA {
  username: string;
  password: string;
  remember_me: boolean;
}

export const sendLoginRequest = async (loginData: LOGIN_DATA) => {
  const response = await axiosInstance.post("/api/login", loginData);
  return response.data;
};
