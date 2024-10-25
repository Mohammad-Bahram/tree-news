"use client";

import Image from "next/image";
import Link from "next/link";
import SidebarAdminMobile from "./SidebarAdminMobile";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const TopDashboard = () => {
  return (
    <div className="w-full h-fit  flex flex-row justify-between items-center mb-[25px] relative">
      <SidebarAdminMobile />
      <div className="z-50 relative self-start ">
        <div className="collapse bg-white  top-0  w-[261px] rounded-tl-[20px] rounded-tr-[40px] rounded-br-[40px] rounded-bl-[20px] shadow-[0_0_10px_rgba(0,0,0,0.15)] absolute max-md:relative max-sm:w-full ">
          <input type="checkbox" />
          <div className="collapse-title  w-full h-[80px] max-sm:h-[65px] flex flex-row items-center gap-x-[14px] p-0 pr-2">
            <div className="w-[64px] h-fit   rounded-full max-sm:w-[50px]   ">
              <Image
                src={"/images/admin/face.png"}
                width={64}
                height={64}
                alt="test"
                className="max-sm:w-[50px]"
              />
            </div>
            <div className="flex  flex-col items-start  h-fit  text-[14px] text-[#4F4F4F] max-sm:text-[11px]">
              <p className="max-sm:text-[10px]">مسعود عزیز خوش آمدی</p>
              <span className="text-[#828282]">ادمین</span>
            </div>
          </div>

          <div className="collapse-content ">
            <div className="w-[86%] mt-2   mx-auto pt-3 border-[1px] border-x-transparent border-b-transparent border-t-[#333333] border-solid h-fit bg-white pr-5 flex flex-col items-start justify-around">
              <Link
                href={"/"}
                className=" leading-[40px] h-[40px]  block w-full text-[14px] "
              >
                ویرایش پروفایل
              </Link>
              <Link
                href={"/"}
                className=" leading-[40px] h-[40px]  block w-full text-[14px]"
              >
                تغییر رمز ورود
              </Link>
              <Link
                onClick={() => {
                  Cookies.remove("authToken");
                }}
                href={"/"}
                className=" leading-[40px] h-[40px]  block w-full text-[14px]"
              >
                خروج
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[90px] w-fit flex flex-row items-center self-start">
        <div className="w-[46px] relative shadow-[0px_0px_5px_rgba(0,0,0,22)] rounded-full flex items-center justify-center  h-[46px] max-sm:w-[38px] max-sm:h-[38px] active:scale-90 cursor-pointer transition-all ease-linear duration-150">
          <button
            onClick={() => {
              // router.push("/admin/dashboard/messages");
            }}
            className="w-full h-full flex justify-center bg-white rounded-full items-center"
          >
            <svg
              className="max-sm:w-[19px]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0199 20.53C9.68987 20.53 7.35987 20.16 5.14987 19.42C4.30987 19.13 3.66987 18.54 3.38987 17.77C3.09987 17 3.19987 16.15 3.65987 15.39L4.80987 13.48C5.04987 13.08 5.26987 12.28 5.26987 11.81V8.92004C5.26987 5.20004 8.29987 2.17004 12.0199 2.17004C15.7399 2.17004 18.7699 5.20004 18.7699 8.92004V11.81C18.7699 12.27 18.9899 13.08 19.2299 13.49L20.3699 15.39C20.7999 16.11 20.8799 16.98 20.5899 17.77C20.2999 18.56 19.6699 19.16 18.8799 19.42C16.6799 20.16 14.3499 20.53 12.0199 20.53ZM12.0199 3.67004C9.12987 3.67004 6.76987 6.02004 6.76987 8.92004V11.81C6.76987 12.54 6.46987 13.62 6.09987 14.25L4.94987 16.16C4.72987 16.53 4.66987 16.92 4.79987 17.25C4.91987 17.59 5.21987 17.85 5.62987 17.99C9.80987 19.39 14.2399 19.39 18.4199 17.99C18.7799 17.87 19.0599 17.6 19.1899 17.24C19.3199 16.88 19.2899 16.49 19.0899 16.16L17.9399 14.25C17.5599 13.6 17.2699 12.53 17.2699 11.8V8.92004C17.2699 6.02004 14.9199 3.67004 12.0199 3.67004Z"
                fill="#828282"
              />
              <path
                d="M13.8796 3.94005C13.8096 3.94005 13.7396 3.93005 13.6696 3.91005C13.3796 3.83005 13.0996 3.77005 12.8296 3.73005C11.9796 3.62005 11.1596 3.68005 10.3896 3.91005C10.1096 4.00005 9.80963 3.91005 9.61963 3.70005C9.42963 3.49005 9.36963 3.19005 9.47963 2.92005C9.88963 1.87005 10.8896 1.18005 12.0296 1.18005C13.1696 1.18005 14.1696 1.86005 14.5796 2.92005C14.6796 3.19005 14.6296 3.49005 14.4396 3.70005C14.2896 3.86005 14.0796 3.94005 13.8796 3.94005Z"
                fill="#828282"
              />
              <path
                d="M12.0195 22.8101C11.0295 22.8101 10.0695 22.4101 9.36953 21.7101C8.66953 21.0101 8.26953 20.0501 8.26953 19.0601H9.76953C9.76953 19.6501 10.0095 20.2301 10.4295 20.6501C10.8495 21.0701 11.4295 21.3101 12.0195 21.3101C13.2595 21.3101 14.2695 20.3001 14.2695 19.0601H15.7695C15.7695 21.1301 14.0895 22.8101 12.0195 22.8101Z"
                fill="#828282"
              />
            </svg>
            <span className="flex flex-row items-center justify-center w-[18px] absolute top-[-5px] text-white right-0 h-[18px] bg-[#EB5757] rounded-full text-center text-[10px]  ">
              3
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopDashboard;
