"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type Tform = {
  name: string;
  comment: string;
};
const UserComment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Tform>();
  const onSubmit: SubmitHandler<Tform> = (data) => {
    console.log(data);
    console.log(data.comment);

    reset();
  };
  return (
    <div className="w-[74.5454545454545%]  mx-auto mb-[64px]">
      <span className="w-[129px] h-[48px] text-center leading-[48px] block bg-[#500C0B] text-white rounded-t-[5px]">
        نظر شما
      </span>
      <hr className="mb-[23px] bg-[#500C0B] border-none h-[1px] " />
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: "نوشتن نام الزامی میباشد.",
          })}
          type="text "
          placeholder="نام"
          className="ml-5 text-[18px] max-sm:w-full font-normal text-[#333333] w-[445px] h-[50px] placeholder:text-[#333333] px-[19px] py-[9px] border-[1px] border-solid rounded-[5px] border-[#BDBDBD] outline-none mb-[23px]"
        />
        <span className="block mb-5 text-[#500C0B]">
          {errors.name && errors.name.message}
        </span>
        <input
          {...register("comment", {
            required: "نظرتان را بگویید.",
          })}
            type="text"
            className="w-full h-[162px] text-[18px] font-normal text-[#333333] pb-[116px]  placeholder:text-[#333333] px-[19px]  border-[1px] border-solid rounded-[5px] border-[#BDBDBD] outline-none mb-[23px] "
            placeholder="نظر شما"
          />
          <span className="text-[#500C0B]">
            {errors.comment && errors.comment.message}
          </span>
          <button className="w-[122px] h-[35px] bg-[#500C0B] text-[14px] font-bold mr-auto block text-white rounded-[5px]   ">
            ثبت نظر
          </button>
        </form>
      </div>
  );
};

export default UserComment;
