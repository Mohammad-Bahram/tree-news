"use client";
import React, { useRef } from "react";
import AddUserForm from "../usersList/AddUserForm";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory } from "./actions";
type TAddUser = {
  title?: string;
  modal: boolean;
};
const schema = z.object({
  categoryName: z.string().refine((value) => value != "", {
    message: "نام دسته بندی الزامی است",
  }),
});
type FormFields = z.infer<typeof schema>;
const AddCategory: React.FC<TAddUser> = ({ title, modal }) => {
  const modelRef = useRef<HTMLDialogElement>(null);
  const openModal = () => {
    if (modelRef.current) {
      modelRef.current.showModal();
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log("okay");
    console.log(data);
    mutation.mutate({
      name: data.categoryName,
      category_id: null,
    });
    reset();
  };
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["creating-category-item"],
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category-data"] });
      console.log("created");
    },
    onError: () => {
      return <h1>اشتباهی رخ داده دوباره امتحان کنید.</h1>;
    },
  });

  return (
    <div className="">
      <button className="btn" onClick={() => openModal()}>
        open modal
      </button>
      <dialog ref={modelRef} id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-white text-red-600 border-2 border-red-600 rounded-full pt-[5px]">
              ✕
            </button>
          </form>
          <div className="w-full h-fit  mt-6">
            <h3 className="text-center">افزودن دسته بندی</h3>
            <form
              className="w-full h-fit p-3"
              onSubmit={handleSubmit(onSubmit)}
              method="post"
            >
              <label htmlFor="categoryName">نام دسته بندی</label>
              <input
                {...register("categoryName")}
                className="block w-full h-[40px] mt-3 mb-3 outline-none border-[1px] border-[#BDBDBD] border-solid p-2 rounded-md"
                type="text"
                id="categoryName"
              />
              {errors.categoryName && (
                <h2 className="text-red-600 text-[14px] mb-4">
                  {errors.categoryName.message}
                </h2>
              )}

              <button className="bg-[#2F80ED] w-full h-[40px] rounded-sm text-white active:scale-95 transition-all ease-linear duration-100">
                {mutation.isPending ? "در حال بارگذاری..." : "ثبت"}
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddCategory;
