"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const MobileHeader = () => {
  const [displey, setDisplay] = useState<boolean>(true);
  const [count, setCount] = useState<number>(1);
  return (
    <header className="w-full  h-fit  p-[10px] max-sm:block sm:hidden">
      <div className=" w-full h-fir=t flex flex-row justify-start gap-x-3 items-center">
        <div className="flex flex-row justify-between items-center w-[100%]    h-full mb-2  ">
          <div className="relative  w-full   h-[37px] ">
            <input
              type="text"
              className="w-full pr-10 outline-none p-[0.5rem] text-[#828282] h-full block bg-[#F6F6F6]   text-[12px]   placeholder:overflow-ellipsis"
              placeholder="کلید واژه خود را جستجو کنید"
            />
            <svg
              className=" absolute top-[50%] right-2 translate-y-[-50%]"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.58317 18.1251C4.87484 18.1251 1.0415 14.2917 1.0415 9.58342C1.0415 4.87508 4.87484 1.04175 9.58317 1.04175C14.2915 1.04175 18.1248 4.87508 18.1248 9.58342C18.1248 14.2917 14.2915 18.1251 9.58317 18.1251ZM9.58317 2.29175C5.55817 2.29175 2.2915 5.56675 2.2915 9.58342C2.2915 13.6001 5.55817 16.8751 9.58317 16.8751C13.6082 16.8751 16.8748 13.6001 16.8748 9.58342C16.8748 5.56675 13.6082 2.29175 9.58317 2.29175Z"
                fill="#828282"
              />
              <path
                d="M18.3335 18.9583C18.1752 18.9583 18.0169 18.9 17.8919 18.775L16.2252 17.1083C15.9835 16.8666 15.9835 16.4666 16.2252 16.225C16.4669 15.9833 16.8669 15.9833 17.1085 16.225L18.7752 17.8916C19.0169 18.1333 19.0169 18.5333 18.7752 18.775C18.6502 18.9 18.4919 18.9583 18.3335 18.9583Z"
                fill="#828282"
              />
            </svg>
          </div>
          <div className="lg:w-[27px] lg:h-[20px]  flex flex-row justify-center items-center">
            <span className="lg:text-[14px]">فا</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9465 5.45337H7.79316H4.05317C3.41317 5.45337 3.09317 6.2267 3.5465 6.68004L6.99983 10.1334C7.55317 10.6867 8.45317 10.6867 9.0065 10.1334L10.3198 8.82004L12.4598 6.68004C12.9065 6.2267 12.5865 5.45337 11.9465 5.45337Z"
                fill="#292D32"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="dropdown">
          <div
            onClick={() => {
              console.log("its okay");

              setDisplay(!displey);

              setCount(count + 1);
              console.log(count);
            }}
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle flex flex-row justify-start hover:bg-transparent"
          >
            <svg
              style={{
                borderRadius: "5px",
                width: "42px",
                color: "white",
                height: "42px",
                backgroundColor: "black",
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          {displey && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-white  rounded-[5px] z-[1] mt-0 w-52  flex flex-col items-start justify-start 
            p-0  shadow bg-black"
            >
              <Link
                href={"/"}
                className="hover:bg-[#500C0B] hover:border-solid hover:border ease-linear transition-all duration-200 hover:border-[#FF0C0C] border border-black w-full h-[42px] flex items-center flex-row rounded-none "
              >
                صفحه اصلی
              </Link>
              <Link
                href={"/world"}
                className="hover:bg-[#500C0B] hover:border-solid hover:border ease-linear transition-all duration-200 hover:border-[#FF0C0C] border border-black w-full h-[42px] flex items-center flex-row "
              >
                جهان
              </Link>
              <Link
                href={"/politics"}
                className="hover:bg-[#500C0B] hover:border-solid hover:border ease-linear transition-all duration-200 hover:border-[#FF0C0C] border border-black w-full h-[42px] flex items-center flex-row "
              >
                سیاست
              </Link>
              <Link
                href={"/economy"}
                className="hover:bg-[#500C0B] hover:border-solid hover:border ease-linear transition-all duration-200 hover:border-[#FF0C0C] border border-black w-full h-[42px] flex items-center flex-row"
              >
                اقتصاد
              </Link>
              <Link
                href={"/sports"}
                className="hover:bg-[#500C0B] hover:border-solid hover:border ease-linear transition-all duration-200 hover:border-[#FF0C0C] border border-black w-full h-[42px] flex items-center flex-row "
              >
                ورزش
              </Link>
              <Link
                href={"/health"}
                className="hover:bg-[#500C0B] hover:border-solid hover:border ease-linear transition-all duration-200 hover:border-[#FF0C0C] border border-black w-full h-[42px] flex items-center flex-row "
              >
                سلامت
              </Link>
              <Link
                href={"/society"}
                className="hover:bg-[#500C0B] hover:border-solid hover:border ease-linear transition-all duration-200 hover:border-[#FF0C0C] border border-black w-full h-[42px] flex items-center flex-row "
              >
                جامعه
              </Link>
              <Link
                href={"/technology"}
                className="hover:bg-[#500C0B] hover:border-solid hover:border ease-linear transition-all duration-200 hover:border-[#FF0C0C] border border-black w-full h-[42px] flex items-center flex-row"
              >
                دانش و فن آوری
              </Link>
            </ul>
          )}
        </div>
        <Image src={"/Group 31.png"} width={43} alt="logo" height={43} />
      </div>
    </header>
  );
};
export default MobileHeader;
