"use client";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import RoleSelect from "./roleselect";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "./actions";
import { EOF } from "dns";

const schema = z
  .object({
    username: z.string().refine((value) => value != "", {
      message: "نام کاربری الزامی است",
    }),
    phone_number: z.string().max(11, "شماره موبایل باید حداکثر یازده رقم باشد"),
    password: z
      .string()
      .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
      .refine((value) => value !== "", {
        message: "لطفا شماره تلفن خود را وارد کنید",
      }),
    checkbox: z.boolean(),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "رمز عبور و تکرار آن مطابقت ندارند!",
    path: ["repeatPassword"],
  });
type FormFields = z.infer<typeof schema>;
const AddUserForm = () => {
  const [role, setRole] = useState<string>();
  const getRole = (value: string) => {
    setRole(value);
  };
  const mutation = useMutation({
    mutationFn: createUser,
    mutationKey: ["create-user"],
    onSuccess: () => {
      console.log("user has been created successfully ");
    },
    onError: () => {
      return <h1>مشکلی پیش آمده دوباره امتحان کنید.</h1>;
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

  const [userconfig, setUserconfig] = useState<{}[]>([]);
  const onsubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);

    setUserconfig((prev) => [...prev, data]);
    mutation.mutate({
      username: data.username,
      password: data.password,
      password_confirmation: data.password_confirmation,
      phone_number: data.phone_number,
      role: role!,
    });
    reset();
  };
  useEffect(() => {
    console.log(userconfig, "this is data of signup page");
  }, [userconfig]);
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
      <h3 className="text-[16px] text-[#333333] text-center mb-[55px]  ">
        ثبت نام کاربر جدید
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
                className="w-[45%] max-md:w-full h-[40px] outline-none border-[1px] border-solid border-[#BDBDBD] rounded-[5px] pr-4 mb-[32px] "
              />
              <RoleSelect getRole={getRole} />
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
              className="w-[45%] h-[40px] outline-none max-md:w-full border-[1px] border-solid border-[#BDBDBD] rounded-[5px] pr-4 mb-[15px] "
            />

            {errors.phone_number && (
              <h2 className="text-red-700 mb-[15px] text-[14px]">
                {errors.phone_number.message}
              </h2>
            )}
            <label
              htmlFor="username"
              className="block text-[14px] text-[#333333] mb-3 "
            >
              رمز عبور
            </label>
            <input
              {...register("password")}
              id="pass"
              type="password"
              className="w-[45%] h-[40px] outline-none border-[1px] max-md:w-full  border-solid border-[#BDBDBD] rounded-[5px] pr-4 mb-[32px] "
            />
            {errors.password && (
              <h2 className="text-red-700 mb-[15px] text-[14px]">
                {errors.password.message}
              </h2>
            )}
            <label
              htmlFor="username"
              className="block text-[14px] text-[#333333] mb-3 "
            >
              تکرار رمز عبور
            </label>
            <input
              {...register("password_confirmation")}
              id="username"
              type="password"
              className="w-[45%] h-[40px] outline-none border-[1px] border-solid max-md:w-full border-[#BDBDBD] rounded-[5px] pr-4 mb-[16px] "
            />
            {errors.password_confirmation && (
              <h2 className="text-red-700 mb-[15px] text-[14px]">
                {errors.password_confirmation.message}
              </h2>
            )}
            <div className="flex flex-row items-center h-[30px] justify-start gap-x-2 bg-white">
              <input
                {...register("checkbox")}
                type="checkbox"
                className="w-[24px] h-[24px] rounded-[4px] border-[#333333] border-solid  border-[1px]  "
              ></input>
              <label
                className="text-[14px] max-sm:text-[13px]"
                htmlFor="sendPassword"
              >
                رمز عبور به شماره موبایل کاربر ارسال گردد
              </label>
            </div>

            <div className="flex flex-row justify-between items-center mt-5 max-md:flex-col max-md:items-center max-md:gap-y-5">
              <button className="w-[122px] h-[48px] max-md:w-full max-md:text-[16px] bg-[#2F80ED] text-[14px] font-bold text-white rounded-[10px]  ml-auto max-md:m-0 block   ">
                ثبت
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
