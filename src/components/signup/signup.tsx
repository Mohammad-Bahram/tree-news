"use client";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

const schema = z
  .object({
    userName: z.string().refine((value) => value != "", {
      message: "نام کاربری الزامی است",
    }),
    phoneNumber: z.string().max(11, "شماره موبایل باید حداکثر یازده رقم باشد"),
    password: z
      .string()
      .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
      .refine((value) => value !== "", {
        message: "لطفا شماره تلفن خود را وارد کنید",
      }),
    checkbox: z.boolean(),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "رمز عبور و تکرار آن مطابقت ندارند!",
    path: ["repeatPassword"],
  });
type FormFields = z.infer<typeof schema>;
const Signup = () => {
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

    reset();
  };
  useEffect(() => {
    console.log(userconfig, "this is data of signup page");
  }, [userconfig]);
  return (
    <div className="absolute top-[50%] max-lg:w-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="w-[739px] max-lg:w-full h-fit bg-[white]  my-6 shadow-2xl sha rounded-[20px] shadow-[#312f2f] relative pt-[40px] pb-[20px]">
        <h3 className="text-[16px] text-[#333333] text-center mb-[55px]  ">
          ثبت نام کاربر جدید
        </h3>
        <div className="w-[91.47496617050068%] h-fit  mx-auto">
          <div className="flex flex-row justify-between items-end  ">
            <form onSubmit={handleSubmit(onsubmit)} className="w-full">
              <label
                htmlFor="username"
                className="block text-[14px] text-[#333333] mb-3 "
              >
                نام کاربری
              </label>
              {errors.userName && (
                <h2 className="text-red-600 text-[14px] mb-4">
                  {errors.userName.message}
                </h2>
              )}
              <input
                {...register("userName")}
                id="username"
                type="text"
                className="w-full h-[40px] outline-none border-[1px] border-solid border-[#BDBDBD] rounded-[5px] pr-4 mb-[32px] "
              />
              <label
                htmlFor="username"
                className="block text-[14px] text-[#333333] mb-3 "
              >
                شماره موبایل
              </label>
              <input
                {...register("phoneNumber")}
                id="tel"
                type="tel"
                className="w-full h-[40px] outline-none border-[1px] border-solid border-[#BDBDBD] rounded-[5px] pr-4 mb-[15px] "
              />

              {errors.phoneNumber && (
                <h2 className="text-red-700 mb-[15px] text-[14px]">
                  {errors.phoneNumber.message}
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
                className="w-full h-[40px] outline-none border-[1px] border-solid border-[#BDBDBD] rounded-[5px] pr-4 mb-[32px] "
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
                {...register("repeatPassword")}
                id="username"
                type="password"
                className="w-full h-[40px] outline-none border-[1px] border-solid border-[#BDBDBD] rounded-[5px] pr-4 mb-[16px] "
              />
              {errors.repeatPassword && (
                <h2 className="text-red-700 mb-[15px] text-[14px]">
                  {errors.repeatPassword.message}
                </h2>
              )}
              <div className="flex flex-row items-center h-[30px] justify-start gap-x-2 bg-white">
                <input
                  {...register("checkbox")}
                  type="checkbox"
                  className="w-[24px] h-[24px] rounded-[4px] border-[#333333] border-solid border-[1px]  "
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
                <Link
                  className="text-[14px] text-red-500 transition-all ease-linear h-fit duration-200 hover:text-blue-600"
                  href={"/login"}
                >
                  از قبل عضو بوده ام.
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
