"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import UsersSearch from "./usersSearch";
import AddUser from "./AddUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { USER, editStatus, fetchUsersData } from "./actions";
import Loading from "@/src/components/Loading/Loading";
const UserList = () => {
  const [userSearchData, setUserSearchData] = useState<[]>();
  const [serachState, setSearchState] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const handleSearchState = () => {
    setSearchState(true);
  };
  const getUserData = (value: []) => {
    setUserSearchData(value);
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["users-data"],
    queryFn: fetchUsersData,
  });
  const mutation = useMutation({
    mutationKey: ["update-userStatus"],
    mutationFn: (editData: { id: number; data: { status: string } }) =>
      editStatus(editData.id, editData.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users-data"],
      });
    },
    onError: () => {
      return <h1>اشتباهی رخ داده دوباره امتحان کنید.</h1>;
    },
  });
  console.log(data, "hello");
  if (isError) {
    return <h1>مشکلی پیش اومد! دوباره امتحان کن.</h1>;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="relative w-full h-fit max-lg:h-fit pb-[30px] pt-[24px] bg-white flex flex-col justify-normal items-start rounded-[15px] px-6 shadow-[0px_0px_5px_rgba(0,0,0,11)]">
      <div
        className="flex flex-row items-start max-sm:flex-col justify-between w-full
           mb-[25px] max-sm:gap-y-3"
      >
        <h2 className="text-[16px]  max-md:text-center max-sm:w-full ">
          لیست کاربران
        </h2>
        <div className="flex max-sm:flex-col max-sm:gap-y-4 max-sm:w-full flex-row gap-x-3">
          {serachState ? (
            <button
              onClick={() => {
                setSearchState(false);
              }}
              className="w-[80px] h-[40px] bg-red-600 text-white self-center "
            >
              بستن
            </button>
          ) : (
            <UsersSearch
              userData={data}
              getUserData={getUserData}
              handleSearchState={handleSearchState}
            />
          )}

          <AddUser modal={true} title="کاربر" />
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
                نام کاربر
              </th>
              <th className="px-4 py-2 border-none font-normal max-sm:p-0 ">
                موبایل
              </th>

              <th className="px-4 py-2 border-none font-normal max-sm:p-0 ">
                عملیات
              </th>
              <th className="px-4 py-2 border-none font-normal rounded-tl-[10px] max-sm:p-0 rounded-bl-[10px] ">
                وضعیت
              </th>
            </tr>
          </thead>
          <tbody>
            {serachState
              ? userSearchData?.map((elem: USER) => {
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
                        {elem.username}
                      </td>
                      <td className="border-none px-4 py-2 text-center max-sm:p-0">
                        {elem.phone_number}
                      </td>

                      <td className="border-none px-4 py-2 max-sm:p-0 text-center">
                        <div className="flex justify-center gap-x-[24px] space-x-2 max-sm:space-x-0 max-sm:gap-x-2">
                          <span className="text-xl">
                            <svg
                              className="cursor-pointer max-md:w-[18px] max-sm:w-[14px]"
                              onClick={() => {
                                console.log("edit");
                              }}
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.53999 19.5201C4.92999 19.5201 4.35999 19.31 3.94999 18.92C3.42999 18.43 3.17999 17.69 3.26999 16.89L3.63999 13.65C3.70999 13.04 4.07999 12.23 4.50999 11.79L12.72 3.10005C14.77 0.930049 16.91 0.870049 19.08 2.92005C21.25 4.97005 21.31 7.11005 19.26 9.28005L11.05 17.97C10.63 18.42 9.84999 18.84 9.23999 18.9401L6.01999 19.49C5.84999 19.5 5.69999 19.5201 5.53999 19.5201ZM15.93 2.91005C15.16 2.91005 14.49 3.39005 13.81 4.11005L5.59999 12.8101C5.39999 13.0201 5.16999 13.5201 5.12999 13.8101L4.75999 17.05C4.71999 17.38 4.79999 17.65 4.97999 17.82C5.15999 17.99 5.42999 18.05 5.75999 18L8.97999 17.4501C9.26999 17.4001 9.74999 17.14 9.94999 16.93L18.16 8.24005C19.4 6.92005 19.85 5.70005 18.04 4.00005C17.24 3.23005 16.55 2.91005 15.93 2.91005Z"
                                fill="#333333"
                              />
                              <path
                                d="M17.3404 10.95C17.3204 10.95 17.2904 10.95 17.2704 10.95C14.1504 10.64 11.6404 8.26997 11.1604 5.16997C11.1004 4.75997 11.3804 4.37997 11.7904 4.30997C12.2004 4.24997 12.5804 4.52997 12.6504 4.93997C13.0304 7.35997 14.9904 9.21997 17.4304 9.45997C17.8404 9.49997 18.1404 9.86997 18.1004 10.28C18.0504 10.66 17.7204 10.95 17.3404 10.95Z"
                                fill="#333333"
                              />
                              <path
                                d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z"
                                fill="#333333"
                              />
                            </svg>
                          </span>
                          <span className="text-xl">
                            <svg
                              className="cursor-pointer max-md:w-[18px] max-sm:w-[14px]"
                              onClick={() => {
                                console.log("delete");
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
                      <td className="border-none px-4 py-2 rounded-tl-[10px] rounded-bl-[10px] max-sm:p-0">
                        <span className="block mx-auto">
                          {" "}
                          {elem.status === "active" ? (
                            <Image
                              className="mx-auto max-md:w-[18px] max-sm:w-[14px]"
                              src={"/images/admin/tick-square.png"}
                              alt="test"
                              width={24}
                              height={24}
                            />
                          ) : (
                            <Image
                              className="mx-auto max-md:w-[18px] max-sm:w-[14px]"
                              src={"/images/admin/close-square.png"}
                              alt="test"
                              width={24}
                              height={24}
                            />
                          )}
                        </span>
                      </td>
                    </tr>
                  );
                })
              : data.map((elem: USER) => {
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
                        {elem.username}
                      </td>
                      <td className="border-none px-4 py-2 text-center max-sm:p-0">
                        {elem.phone_number}
                      </td>

                      <td className="border-none px-4 py-2 max-sm:p-0 text-center">
                        <div className="flex justify-center gap-x-[24px] space-x-2 max-sm:space-x-0 max-sm:gap-x-2">
                          <span className="text-xl">
                            <svg
                              className="cursor-pointer max-md:w-[18px] max-sm:w-[14px]"
                              onClick={() => {
                                console.log("edit");
                                mutation.mutate({
                                  id: elem.id,
                                  data: { status: "active" },
                                });
                              }}
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.53999 19.5201C4.92999 19.5201 4.35999 19.31 3.94999 18.92C3.42999 18.43 3.17999 17.69 3.26999 16.89L3.63999 13.65C3.70999 13.04 4.07999 12.23 4.50999 11.79L12.72 3.10005C14.77 0.930049 16.91 0.870049 19.08 2.92005C21.25 4.97005 21.31 7.11005 19.26 9.28005L11.05 17.97C10.63 18.42 9.84999 18.84 9.23999 18.9401L6.01999 19.49C5.84999 19.5 5.69999 19.5201 5.53999 19.5201ZM15.93 2.91005C15.16 2.91005 14.49 3.39005 13.81 4.11005L5.59999 12.8101C5.39999 13.0201 5.16999 13.5201 5.12999 13.8101L4.75999 17.05C4.71999 17.38 4.79999 17.65 4.97999 17.82C5.15999 17.99 5.42999 18.05 5.75999 18L8.97999 17.4501C9.26999 17.4001 9.74999 17.14 9.94999 16.93L18.16 8.24005C19.4 6.92005 19.85 5.70005 18.04 4.00005C17.24 3.23005 16.55 2.91005 15.93 2.91005Z"
                                fill="#333333"
                              />
                              <path
                                d="M17.3404 10.95C17.3204 10.95 17.2904 10.95 17.2704 10.95C14.1504 10.64 11.6404 8.26997 11.1604 5.16997C11.1004 4.75997 11.3804 4.37997 11.7904 4.30997C12.2004 4.24997 12.5804 4.52997 12.6504 4.93997C13.0304 7.35997 14.9904 9.21997 17.4304 9.45997C17.8404 9.49997 18.1404 9.86997 18.1004 10.28C18.0504 10.66 17.7204 10.95 17.3404 10.95Z"
                                fill="#333333"
                              />
                              <path
                                d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z"
                                fill="#333333"
                              />
                            </svg>
                          </span>
                          <span className="text-xl">
                            <svg
                              className="cursor-pointer max-md:w-[18px] max-sm:w-[14px]"
                              onClick={() => {
                                console.log("block status");
                                mutation.mutate({
                                  id: elem.id,
                                  data: { status: "inactive" },
                                });
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
                      <td className="border-none px-4 py-2 rounded-tl-[10px] rounded-bl-[10px] max-sm:p-0">
                        <span className="block mx-auto">
                          {" "}
                          {elem.status === "active" ? (
                            <Image
                              className="mx-auto max-md:w-[18px] max-sm:w-[14px]"
                              src={"/images/admin/tick-square.png"}
                              alt="test"
                              width={24}
                              height={24}
                            />
                          ) : (
                            <Image
                              className="mx-auto max-md:w-[18px] max-sm:w-[14px]"
                              src={"/images/admin/close-square.png"}
                              alt="test"
                              width={24}
                              height={24}
                            />
                          )}
                        </span>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
