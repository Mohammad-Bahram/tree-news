"use client";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";
import RoleSelect from "../usersList/roleselect";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSubtitle } from "./actions";

const schema = z.object({
  text: z.string().max(85, "هر خبر نهایتا 85 حرف میتواند داشته باشد"),
});

type FormFields = z.infer<typeof schema>;
const AddSubtitleForm = () => {
  const mutation = useMutation({
    mutationKey: ["create-subtitle"],
    mutationFn: addSubtitle,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["fetch-subtitle"],
      });
    },
  });
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onsubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data.text, "data");
    mutation.mutate(data);

    reset();
  };
  return (
    <div className="w-[739px] max-lg:w-full h-fit bg-[white] ma  my-6 shadow-2xl sha rounded-[20px] shadow-[#312f2f] relative pt-[40px] pb-[20px]">
      <form method="dialog ">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 min-h-0 w-fit  rounded-[50%] border-[1px] border-solid  text-[15px] h-fit leading-[35px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
              fill="#EB5757"
            />
            <path
              d="M9.17035 15.5801C8.98035 15.5801 8.79035 15.5101 8.64035 15.3601C8.35035 15.0701 8.35035 14.5901 8.64035 14.3001L14.3004 8.64011C14.5904 8.35011 15.0704 8.35011 15.3604 8.64011C15.6504 8.93011 15.6504 9.41011 15.3604 9.70011L9.70035 15.3601C9.56035 15.5101 9.36035 15.5801 9.17035 15.5801Z"
              fill="#EB5757"
            />
            <path
              d="M14.8304 15.5801C14.6404 15.5801 14.4504 15.5101 14.3004 15.3601L8.64035 9.70011C8.35035 9.41011 8.35035 8.93011 8.64035 8.64011C8.93035 8.35011 9.41035 8.35011 9.70035 8.64011L15.3604 14.3001C15.6504 14.5901 15.6504 15.0701 15.3604 15.3601C15.2104 15.5101 15.0204 15.5801 14.8304 15.5801Z"
              fill="#EB5757"
            />
          </svg>
        </button>
      </form>
      <h3 className="w-[91.47496617050068%] mx-auto text-[16px] text-[#333333] text-right mb-[14px]  ">
        زیرنویس
      </h3>
      <div className="w-[91.47496617050068%] h-fit  mx-auto">
        <div className="flex flex-row justify-between items-end   ">
          <form onSubmit={handleSubmit(onsubmit)} className="w-full">
            <input
              {...register("text")}
              type="text"
              className="w-full  mb-4 border-[0.5px] border-solid border-[#4F4F4F] rounded-[5px] outline-none pr-3 h-[50px]"
            />
            {errors.text && (
              <span className="flex items-center gap-x-3 text-[16px] text-[#282828] mb-3">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.031 14.75C11.621 14.75 11.281 14.41 11.281 14V9C11.281 8.59 11.621 8.25 12.031 8.25C12.441 8.25 12.781 8.59 12.781 9V14C12.781 14.41 12.441 14.75 12.031 14.75Z"
                    fill="#282828"
                  />
                  <path
                    d="M12.031 18.0001C11.971 18.0001 11.901 17.9901 11.831 17.9801C11.771 17.9701 11.711 17.9501 11.651 17.9201C11.591 17.9001 11.531 17.8701 11.471 17.8301C11.421 17.7901 11.371 17.7501 11.321 17.7101C11.141 17.5201 11.031 17.2601 11.031 17.0001C11.031 16.7401 11.141 16.4801 11.321 16.2901C11.371 16.2501 11.421 16.2101 11.471 16.1701C11.531 16.1301 11.591 16.1001 11.651 16.0801C11.711 16.0501 11.771 16.0301 11.831 16.0201C11.961 15.9901 12.101 15.9901 12.221 16.0201C12.291 16.0301 12.351 16.0501 12.411 16.0801C12.471 16.1001 12.531 16.1301 12.591 16.1701C12.641 16.2101 12.691 16.2501 12.741 16.2901C12.921 16.4801 13.031 16.7401 13.031 17.0001C13.031 17.2601 12.921 17.5201 12.741 17.7101C12.691 17.7501 12.641 17.7901 12.591 17.8301C12.531 17.8701 12.471 17.9001 12.411 17.9201C12.351 17.9501 12.291 17.9701 12.221 17.9801C12.161 17.9901 12.091 18.0001 12.031 18.0001Z"
                    fill="#282828"
                  />
                  <path
                    d="M18.091 22.1601H5.97098C4.02098 22.1601 2.53098 21.4501 1.77098 20.1701C1.02098 18.8901 1.12098 17.2401 2.07098 15.5301L8.13098 4.63009C9.13098 2.83009 10.511 1.84009 12.031 1.84009C13.551 1.84009 14.931 2.83009 15.931 4.63009L21.991 15.5401C22.941 17.2501 23.051 18.8901 22.291 20.1801C21.531 21.4501 20.041 22.1601 18.091 22.1601ZM12.031 3.34009C11.091 3.34009 10.171 4.06009 9.44098 5.36009L3.39098 16.2701C2.71098 17.4901 2.60098 18.6101 3.07098 19.4201C3.54098 20.2301 4.58098 20.6701 5.98098 20.6701H18.101C19.501 20.6701 20.531 20.2301 21.011 19.4201C21.491 18.6101 21.371 17.5001 20.691 16.2701L14.621 5.36009C13.891 4.06009 12.971 3.34009 12.031 3.34009Z"
                    fill="#282828"
                  />
                </svg>

                {errors.text.message}
              </span>
            )}
            <button className="w-[122px] h-[48px] max-md:w-full max-md:text-[16px] bg-[#2F80ED] text-[14px] font-bold text-white rounded-[10px]  mr-auto max-md:m-0 block   ">
              ثبت
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSubtitleForm;
