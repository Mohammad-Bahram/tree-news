"use client";
import clsx from "clsx";
import React from "react";
import UsersSearch from "../usersList/usersSearch";
import AddSubtitle from "./AddSubtitle";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteSubtitle, fetchSubtitle } from "./actions";
import Loading from "@/src/app/loading";
import moment from "jalali-moment";

const Subtitle = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["fetch-subtitle"],
    queryFn: fetchSubtitle,
  });
  const mutation = useMutation({
    mutationKey: ["delete-subtitle"],
    mutationFn: deleteSubtitle,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["fetch-subtitle"],
      });
    },
    onError: () => {
      return <h1>خطایی رخ داده لطفا دوباره امتحان کنید.</h1>;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <h1>مشکلی پیش آمده دوباره امتحان کنید.</h1>;
  }
  if (mutation.isPending) {
    return <Loading />;
  }
  return (
    <div className="w-full h-fit max-lg:h-fit pb-[30px] pt-[24px] bg-white flex flex-col justify-normal items-start rounded-[15px] px-6 shadow-[0px_0px_5px_rgba(0,0,0,11)]">
      <div
        className="flex flex-row items-start max-sm:flex-col justify-between w-full
           mb-[25px] max-sm:gap-y-3"
      >
        <h2 className="text-[16px]  max-md:text-center max-sm:w-full ">
          زیرنویس اخبار
        </h2>
        <div className="flex max-sm:flex-col max-sm:gap-y-4 max-sm:w-full flex-row gap-x-3">
          <UsersSearch />
          <AddSubtitle title="زیرنویس" />
        </div>
      </div>
      {data && (
        <table className="w-full border-collapse rounded-lg bg-white ">
          <thead className="w-full bg-[#AC2043] rounded-[10px] ">
            <tr className="rounded-[10px] bg-[#AC2043] h-[56px] max-md:text-[12px]  text-[white] text-[16px] max-sm:text-[10px] ">
              <th className="px-4 rounded-br-[10px] rounded-tr-[10px] py-2 border-none font-normal max-sm:p-0 ">
                ردیف
              </th>
              <th className="px-4 py-2 border-none font-normal max-sm:p-0 ">
                عنوان زیر نویس{" "}
              </th>
              <th className="px-4 py-2 border-none font-normal max-sm:p-0 ">
                تاریخ{" "}
              </th>

              <th className="px-4 py-2 border-none font-normal max-sm:p-0 ">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .map((elem: { id: number; text: string; created_at: string }) => {
                const formattedDate = moment(elem.created_at)
                  .locale("fa")
                  .format("YYYY/MM/DD HH:mm:ss");
                return (
                  <tr
                    key={elem.id}
                    className={clsx(
                      " h-[56px] text-[#333333] text-[14px] max-md:text-[12px] max-sm:text-[10px] ",
                      {
                        "bg-white": elem.id % 2 !== 0,
                        "bg-[#E70B0B12]": elem.id % 2 === 0,
                      }
                    )}
                  >
                    <td className="border-none px-4 py-2 text-center rounded-tr-[10px] rounded-br-[10px] max-sm:p-0">
                      {elem.id}
                    </td>
                    <td className="border-none px-4 py-2 text-center max-sm:p-0">
                      {elem.text}
                    </td>
                    <td className="border-none px-4 py-2 text-center max-sm:p-0">
                      {formattedDate}
                    </td>

                    <td className="border-none px-4 py-2 max-sm:p-0 text-center">
                      <div className="flex justify-center gap-x-[24px] space-x-2 max-sm:space-x-0 max-sm:gap-x-2">
                        <span className="text-xl">
                          <svg
                            className="cursor-pointer max-md:w-[18px] max-sm:w-[14px]"
                            onClick={() => {
                              console.log("delete");
                              mutation.mutate(elem.id);
                            }}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                              fill="#333333"
                            />
                            <path
                              d="M4.89984 19.7499C4.70984 19.7499 4.51984 19.6799 4.36984 19.5299C4.07984 19.2399 4.07984 18.7599 4.36984 18.4699L18.3698 4.46994C18.6598 4.17994 19.1398 4.17994 19.4298 4.46994C19.7198 4.75994 19.7198 5.23994 19.4298 5.52994L5.42984 19.5299C5.27984 19.6799 5.08984 19.7499 4.89984 19.7499Z"
                              fill="#333333"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })
              .reverse()}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Subtitle;
