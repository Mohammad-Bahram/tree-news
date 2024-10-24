import axiosInstance from "@/src/libs/axiosInstance";
import Cookies from "js-cookie";

export interface USER {
  id: number;
  username: string;
  phone_number: string;
  status: string;
}

interface NEW_USER {
  username: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
  role: string;
}

export const fetchUsersData = async () => {
  const token = Cookies.get("authToken");

  const response = await axiosInstance.get("/api/users/index", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data.data;
};

export const createUser = async (user: NEW_USER) => {
  const token = Cookies.get("authToken");
  const response = await axiosInstance.post("/api/users/store", user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const fetchRoles = async () => {
  const response = await axiosInstance("/api/roles/index");
  return response.data;
};

export const editStatus = async (id: number, data: { status: string }) => {
  const token = Cookies.get("authToken");
  const response = await axiosInstance.put(
    `/api/users/change_status/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
