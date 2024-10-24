"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
type TAddUser = {
  title?: string;
};
const AddAdvertisment: React.FC<TAddUser> = ({ title }) => {
  const router = useRouter();
  return (
    <div className="">
      <button
        onClick={() => {
          router.push("/admin/dashboard/advertisment/add-advertisment");
        }}
        className="btn w-[166px] max-sm:w-full max-sm:h-[40px] max-sm:text-[12px] h-[48px] bg-[#2F80ED] rounded-[10px] text-white text-[12px] font-bold flex flex-row justify-center items-center gap-x-1"
      >
        <svg
          className="max-sm:w-[19px]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2 10.2H13.8V4.8C13.8 3.816 12.984 3 12 3C11.016 3 10.2 3.816 10.2 4.8V10.2H4.8C3.816 10.2 3 11.016 3 12C3 12.984 3.816 13.8 4.8 13.8H10.2V19.2C10.2 20.184 11.016 21 12 21C12.984 21 13.8 20.184 13.8 19.2V13.8H19.2C20.184 13.8 21 12.984 21 12C21 11.016 20.184 10.2 19.2 10.2Z"
            fill="white"
          />
        </svg>
        افزودن <span>{title && title}</span>
      </button>
    </div>
  );
};

export default AddAdvertisment;
