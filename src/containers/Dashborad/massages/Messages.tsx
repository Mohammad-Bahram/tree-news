"use client";

import clsx from "clsx";
import React, { useState } from "react";
import MessagesSearch from "./MessageSearch";

const Messages = () => {
  const message: {
    id: number;
    title: string;
    description: string;
    date: string;
    confirmed?: boolean;
    deleted?: boolean;
  }[] = [
    {
      id: 1,
      title: "ورزشی: چرا تیم‌ها با بیرانوند قرارداد نمی‌بندند؟",
      description:
        "رضا: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی ",
      date: "1403/04/14",
      confirmed: true,
    },
    {
      id: 2,
      title: "جهان: تاریخ انتخابات ریاست جمهوری آمریکا",
      description:
        "رضا: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی ",
      date: "1403/04/14",
      deleted: true,
    },
    {
      id: 3,
      title: "چرا تیم‌ها با بیرانوند قرارداد نمی‌بندند؟",
      description:
        "رضا: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی ",
      date: "1403/04/14",
    },
  ];

  const [all, setAll] = useState<boolean>(true);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [deleted, setDeleted] = useState<boolean>(false);
  return (
    <div className="w-full h-fit max-lg:h-fit pb-[30px] pt-[24px] bg-white flex flex-col justify-normal items-start rounded-[15px] px-6 shadow-[0px_0px_5px_rgba(0,0,0,11)]">
      <div
        className="flex flex-row items-start max-md:flex-col justify-between w-full
           mb-[25px] max-md:gap-y-3"
      >
        <h2 className="text-[16px]  max-md:text-center max-md:w-full ">
          مدیریت اخبار
        </h2>
        <div className=" lg:w-fit md:w-[50%] max-md:w-full h-[48px] p-1 flex md:justify-between items-center max-md:justify-around shadow-[0px_0px_5px_rgba(0,0,0,11)]  rounded-[10px] gap-x-2 max-sm:text-[12px]">
          <button
            onClick={() => {
              setAll(true);
              setConfirmed(false);
              setDeleted(false);
            }}
            className={clsx(
              "md:w-[109px] h-full max-md:w-[30%]  rounded-[8px]",
              {
                "bg-[#AC2043] text-white transition-all ease-linear duration-200":
                  all === true,
              }
            )}
          >
            همه
          </button>
          <button
            onClick={() => {
              setAll(false);
              setConfirmed(true);
              setDeleted(false);
            }}
            className={clsx(
              "md:w-[109px] h-full max-md:w-[30%] rounded-[8px]",
              {
                "bg-[#AC2043] transition-all ease-linear duration-200 text-white":
                  confirmed === true,
              }
            )}
          >
            تایید شده
          </button>
          <button
            onClick={() => {
              setAll(false);
              setConfirmed(false);
              setDeleted(true);
            }}
            className={clsx(
              "md:w-[109px] h-full max-md:w-[30%] rounded-[8px]",
              {
                "bg-[#AC2043] transition-all ease-linear duration-200 text-white":
                  deleted === true,
              }
            )}
          >
            حذف شده
          </button>
        </div>

        <MessagesSearch />
      </div>
      {message && all && (
        <table className="w-full border-collapse rounded-lg bg-white ">
          <thead className="w-full bg-[#AC2043] rounded-[10px] ">
            <tr className="rounded-[10px] bg-[#AC2043] h-[56px] max-md:text-[12px]  text-[white] text-[16px] max-sm:text-[10px] ">
              <th className="px-4 rounded-br-[10px] rounded-tr-[10px] py-2 border-none font-normal max-sm:p-0 max-sm:pr-3 ">
                ردیف
              </th>
              <th className="px-4 py-2 border-none font-normal max-sm:p-0 max-sm:rounded-tl-[10px] max-sm:rounded-bl-[10px]  text-right pr-16">
                عنوان خبر / نظر
              </th>

              <th className="px-4 py-2 border-none font-normal rounded-tl-[10px] max-sm:p-0 rounded-bl-[10px] max-sm:hidden ">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {message.map((elem) => {
              return (
                <tr
                  key={elem.id}
                  className={
                    " h-[56px] text-[#333333] text-[14px] max-md:text-[12px] max-sm:text-[10px] "
                  }
                >
                  <td className="border-none px-4 py-2 text-center rounded-tr-[10px] rounded-br-[10px] max-sm:p-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22.81C11.31 22.81 10.66 22.46 10.2 21.85L8.7 19.85C8.67 19.81 8.55 19.76 8.5 19.75H8C3.83 19.75 1.25 18.62 1.25 13V8C1.25 3.58 3.58 1.25 8 1.25H16C20.42 1.25 22.75 3.58 22.75 8V13C22.75 17.42 20.42 19.75 16 19.75H15.5C15.42 19.75 15.35 19.79 15.3 19.85L13.8 21.85C13.34 22.46 12.69 22.81 12 22.81ZM8 2.75C4.42 2.75 2.75 4.42 2.75 8V13C2.75 17.52 4.3 18.25 8 18.25H8.5C9.01 18.25 9.59 18.54 9.9 18.95L11.4 20.95C11.75 21.41 12.25 21.41 12.6 20.95L14.1 18.95C14.43 18.51 14.95 18.25 15.5 18.25H16C19.58 18.25 21.25 16.58 21.25 13V8C21.25 4.42 19.58 2.75 16 2.75H8Z"
                        fill="#4F4F4F"
                      />
                      <path
                        d="M12 12C11.44 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12Z"
                        fill="#4F4F4F"
                      />
                      <path
                        d="M16 12C15.44 12 15 11.55 15 11C15 10.45 15.45 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z"
                        fill="#4F4F4F"
                      />
                      <path
                        d="M8 12C7.44 12 7 11.55 7 11C7 10.45 7.45 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12Z"
                        fill="#4F4F4F"
                      />
                    </svg>
                  </td>
                  <td className="border-none px-4 py-2  max-sm:p-0 text-right flex flex-col ">
                    <p className=" font-normal text-[#4F4F4F] mb-[16px] lg:text-[14px] md:text-[12px] max-md:text-[10px] max-sm:text-[9px] max-sm:mt-2">
                      {elem.title}
                    </p>
                    <p className="p-[9px] lg:text-[14px] md:text-[12px] max-md:text-[10px]  bg-[#ff0c0c08] rounded-[10px] h-[92px] flex items-center lg:leading-[35px] max-sm:text-[9px]">
                      {" "}
                      {elem.description}
                    </p>
                  </td>

                  <td className="border-none px-4 py-2 max-sm:p-0 text-center max-sm:hidden  ">
                    <div className="flex flex-col justify-between items-end h-[103px]">
                      <span className="text-[14px] text-[#4F4F4F]">
                        {elem.date}
                      </span>
                      <div className="w-full  flex gap-x-2 mr-auto">
                        <button className=" sm:w-[73px] w-[50px] sm:h-[35px] h-[25px] rounded-[10px] text-white sm:text-[14px] text-[9px]  font-bold transition-all ease-linear duration-150 active:scale-95  bg-[#EB5757]">
                          حذف
                        </button>
                        <button className=" sm:w-[73px] w-[50px] sm:h-[35px] h-[25px] rounded-[10px] text-white sm:text-[14px] text-[9px] font-bold transition-all ease-linear duration-150 active:scale-95   bg-[#27AE60]">
                          تائید
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {message && confirmed && (
        <table className="w-full border-collapse rounded-lg bg-white ">
          <thead className="w-full bg-[#AC2043] rounded-[10px] ">
            <tr className="rounded-[10px] bg-[#AC2043] h-[56px] max-md:text-[12px]  text-[white] text-[16px] max-sm:text-[10px] ">
              <th className="px-4 rounded-br-[10px] rounded-tr-[10px] py-2 border-none font-normal max-sm:p-0 max-sm:pr-3 ">
                ردیف
              </th>
              <th className="px-4 py-2 border-none font-normal max-sm:p-0 max-sm:rounded-tl-[10px] max-sm:rounded-bl-[10px]  text-right pr-16">
                عنوان خبر / نظر
              </th>

              <th className="px-4 py-2 border-none font-normal rounded-tl-[10px] max-sm:p-0 rounded-bl-[10px] max-sm:hidden ">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {message.map((elem) => {
              if (elem.confirmed) {
                return (
                  <tr
                    key={elem.id}
                    className={
                      " h-[56px] text-[#333333] text-[14px] max-md:text-[12px] max-sm:text-[10px] "
                    }
                  >
                    <td className="border-none px-4 py-2 text-center rounded-tr-[10px] rounded-br-[10px] max-sm:p-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22.81C11.31 22.81 10.66 22.46 10.2 21.85L8.7 19.85C8.67 19.81 8.55 19.76 8.5 19.75H8C3.83 19.75 1.25 18.62 1.25 13V8C1.25 3.58 3.58 1.25 8 1.25H16C20.42 1.25 22.75 3.58 22.75 8V13C22.75 17.42 20.42 19.75 16 19.75H15.5C15.42 19.75 15.35 19.79 15.3 19.85L13.8 21.85C13.34 22.46 12.69 22.81 12 22.81ZM8 2.75C4.42 2.75 2.75 4.42 2.75 8V13C2.75 17.52 4.3 18.25 8 18.25H8.5C9.01 18.25 9.59 18.54 9.9 18.95L11.4 20.95C11.75 21.41 12.25 21.41 12.6 20.95L14.1 18.95C14.43 18.51 14.95 18.25 15.5 18.25H16C19.58 18.25 21.25 16.58 21.25 13V8C21.25 4.42 19.58 2.75 16 2.75H8Z"
                          fill="#4F4F4F"
                        />
                        <path
                          d="M12 12C11.44 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12Z"
                          fill="#4F4F4F"
                        />
                        <path
                          d="M16 12C15.44 12 15 11.55 15 11C15 10.45 15.45 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z"
                          fill="#4F4F4F"
                        />
                        <path
                          d="M8 12C7.44 12 7 11.55 7 11C7 10.45 7.45 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12Z"
                          fill="#4F4F4F"
                        />
                      </svg>
                    </td>
                    <td className="border-none px-4 py-2  max-sm:p-0 text-right flex flex-col ">
                      <p className=" font-normal text-[#4F4F4F] mb-[16px] lg:text-[14px] md:text-[12px] max-md:text-[10px] max-sm:text-[9px] max-sm:mt-2">
                        {elem.title}
                      </p>
                      <p className="p-[9px] lg:text-[14px] md:text-[12px] max-md:text-[10px]  bg-[#ff0c0c08] rounded-[10px] h-[92px] flex items-center lg:leading-[35px] max-sm:text-[9px]">
                        {" "}
                        {elem.description}
                      </p>
                    </td>

                    <td className="border-none px-4 py-2 max-sm:p-0 text-center max-sm:hidden  ">
                      <div className="flex flex-col justify-between items-end h-[103px]">
                        <span className="text-[14px] text-[#4F4F4F]">
                          {elem.date}
                        </span>
                        <div className="w-full  flex gap-x-2 mr-auto">
                          <button className=" sm:w-[73px] w-[50px] sm:h-[35px] h-[25px] rounded-[10px] text-white sm:text-[14px] text-[9px]  font-bold transition-all ease-linear duration-150 active:scale-95  bg-[#EB5757]">
                            حذف
                          </button>
                          <button className=" sm:w-[73px] w-[50px] sm:h-[35px] h-[25px] rounded-[10px] text-white sm:text-[14px] text-[9px] font-bold transition-all ease-linear duration-150 active:scale-95   bg-[#27AE60]">
                            تائید
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      )}
      {message && deleted && (
        <table className="w-full border-collapse rounded-lg bg-white ">
          <thead className="w-full bg-[#AC2043] rounded-[10px] ">
            <tr className="rounded-[10px] bg-[#AC2043] h-[56px] max-md:text-[12px]  text-[white] text-[16px] max-sm:text-[10px] ">
              <th className="px-4 rounded-br-[10px] rounded-tr-[10px] py-2 border-none font-normal max-sm:p-0 max-sm:pr-3 ">
                ردیف
              </th>
              <th className="px-4 py-2 border-none font-normal max-sm:p-0 max-sm:rounded-tl-[10px] max-sm:rounded-bl-[10px]  text-right pr-16">
                عنوان خبر / نظر
              </th>

              <th className="px-4 py-2 border-none font-normal rounded-tl-[10px] max-sm:p-0 rounded-bl-[10px] max-sm:hidden ">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {message.map((elem) => {
              if (elem.deleted) {
                return (
                  <tr
                    key={elem.id}
                    className={
                      " h-[56px] text-[#333333] text-[14px] max-md:text-[12px] max-sm:text-[10px] "
                    }
                  >
                    <td className="border-none px-4 py-2 text-center rounded-tr-[10px] rounded-br-[10px] max-sm:p-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22.81C11.31 22.81 10.66 22.46 10.2 21.85L8.7 19.85C8.67 19.81 8.55 19.76 8.5 19.75H8C3.83 19.75 1.25 18.62 1.25 13V8C1.25 3.58 3.58 1.25 8 1.25H16C20.42 1.25 22.75 3.58 22.75 8V13C22.75 17.42 20.42 19.75 16 19.75H15.5C15.42 19.75 15.35 19.79 15.3 19.85L13.8 21.85C13.34 22.46 12.69 22.81 12 22.81ZM8 2.75C4.42 2.75 2.75 4.42 2.75 8V13C2.75 17.52 4.3 18.25 8 18.25H8.5C9.01 18.25 9.59 18.54 9.9 18.95L11.4 20.95C11.75 21.41 12.25 21.41 12.6 20.95L14.1 18.95C14.43 18.51 14.95 18.25 15.5 18.25H16C19.58 18.25 21.25 16.58 21.25 13V8C21.25 4.42 19.58 2.75 16 2.75H8Z"
                          fill="#4F4F4F"
                        />
                        <path
                          d="M12 12C11.44 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12Z"
                          fill="#4F4F4F"
                        />
                        <path
                          d="M16 12C15.44 12 15 11.55 15 11C15 10.45 15.45 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z"
                          fill="#4F4F4F"
                        />
                        <path
                          d="M8 12C7.44 12 7 11.55 7 11C7 10.45 7.45 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12Z"
                          fill="#4F4F4F"
                        />
                      </svg>
                    </td>
                    <td className="border-none px-4 py-2  max-sm:p-0 text-right flex flex-col ">
                      <p className=" font-normal text-[#4F4F4F] mb-[16px] lg:text-[14px] md:text-[12px] max-md:text-[10px] max-sm:text-[9px] max-sm:mt-2">
                        {elem.title}
                      </p>
                      <p className="p-[9px] lg:text-[14px] md:text-[12px] max-md:text-[10px]  bg-[#ff0c0c08] rounded-[10px] h-[92px] flex items-center lg:leading-[35px] max-sm:text-[9px]">
                        {" "}
                        {elem.description}
                      </p>
                    </td>

                    <td className="border-none px-4 py-2 max-sm:p-0 text-center max-sm:hidden  ">
                      <div className="flex flex-col justify-between items-end h-[103px]">
                        <span className="text-[14px] text-[#4F4F4F]">
                          {elem.date}
                        </span>
                        <div className="w-full  flex gap-x-2 mr-auto">
                          <button className=" sm:w-[73px] w-[50px] sm:h-[35px] h-[25px] rounded-[10px] text-white sm:text-[14px] text-[9px]  font-bold transition-all ease-linear duration-150 active:scale-95  bg-[#EB5757]">
                            حذف
                          </button>
                          <button className=" sm:w-[73px] w-[50px] sm:h-[35px] h-[25px] rounded-[10px] text-white sm:text-[14px] text-[9px] font-bold transition-all ease-linear duration-150 active:scale-95   bg-[#27AE60]">
                            تائید
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Messages;
