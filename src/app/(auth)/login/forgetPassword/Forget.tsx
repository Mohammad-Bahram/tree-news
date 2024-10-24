"use client";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import { sendResetRequest } from "./action";

const schema = z.object({
  username: z.string().refine((value) => value != "", {
    message: "نام کاربری الزامی است",
  }),
  phone_number: z.string().max(11, "شماره موبایل باید حداکثر یازده رقم باشد"),
});

type FormFields = z.infer<typeof schema>;
const Forget = () => {
  const mutation = useMutation({
    mutationKey: ["reset-request"],
    mutationFn: sendResetRequest,
    onSuccess: () => {
      console.log("request sent");
    },
    onError: () => {
      throw new Error("اشتباهی رخ داده. مجددا امتحان نمایید");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onsubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
    mutation.mutate({
      username: data.username,
      phone_number: data.phone_number,
    });

    reset();
  };
  return (
    <div className="w-[739px]  max-lg:w-full h-fit bg-[white] ma  my-6 shadow-2xl sha rounded-[20px] shadow-[#312f2f] relative pt-[40px] pb-[20px]">
     
      <h3 className="text-[16px] text-[#333333] text-center mb-[55px]  ">
        درخواست بازنشانی رمز عبور
      </h3>
      <div className="w-[91.47496617050068%] h-fit  mx-auto">
        <div className="flex flex-row justify-between items-end   ">
          <form onSubmit={handleSubmit(onsubmit)} className="w-full">
            <label
              htmlFor="username"
              className="block text-[14px] text-[#333333] mb-3 "
            >
              نام کاربری
            </label>
            {errors.username && (
              <h2 className="text-red-600 text-[14px] mb-4">
                {errors.username.message}
              </h2>
            )}
            <div className="w-full flex flex-row justify-between max-md:flex-col">
              <input
                {...register("username")}
                id="username"
                type="text"
                className="w-full max-md:w-full h-[40px] outline-none border-[1px] border-solid border-[#BDBDBD] rounded-[5px] pr-4 mb-[32px] "
              />
            </div>
            <label
              htmlFor="username"
              className="block text-[14px] text-[#333333] mb-3 "
            >
              شماره موبایل
            </label>
            <input
              {...register("phone_number")}
              id="tel"
              type="tel"
              className="w-full h-[40px] outline-none max-md:w-full border-[1px] border-solid border-[#BDBDBD] rounded-[5px] pr-4 mb-[15px] "
            />

            {errors.phone_number && (
              <h2 className="text-red-700 mb-[15px] text-[14px]">
                {errors.phone_number.message}
              </h2>
            )}

            <div className="flex flex-row justify-between items-center mt-5 max-md:flex-col max-md:items-center max-md:gap-y-5">
              <button className="w-[122px] h-[48px] max-md:w-full max-md:text-[16px] bg-[#2F80ED] text-[14px] font-bold text-white rounded-[10px]  ml-auto max-md:m-0 block   ">
                {mutation.isPending ? "درحال بارگذاری..." : "ثبت"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forget;
