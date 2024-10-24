"use client";
import Image from "next/image";
import MobileHeader from "./MobileHeader";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchCategoryData2 } from "./actions";
import Loading from "@/src/app/loading";
import { CATEGORY_DATA } from "@/src/app/admin/dashboard/categories/action";
type Tlink = {
  title: string;
  path: string;
};
const Header = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["fetchimg-category-data"],
    queryFn: fetchCategoryData2,
  });
  console.log(data);
  if (isError) {
    return <h1>مجددا امتحان نمایید.</h1>;
  }
  return (
    <>
      <header className="w-full h-fit max-sm:hidden">
        <div className="lg:w-[91.66%] lg:h-[64px] bg-white p-[10px] items-center mx-auto flex flex-row justify-between max-lg:px-[35px] max-md:px-3    ">
          <div className="flex flex-row justify-between items-center lg:w-[32%] max-lg:w-[40%] max-md:w-[45%] lg:h-full">
            <Image src={"/Group 31.png"} width={43} alt="logo" height={43} />
            <div className="lg:w-[77.59%] h-fit flex max-lg:w-[80%] flex-row justify-between">
              <button>درباره ما</button>
              <Link href={"/login"}> ورود</Link>

              <button>ارتباط با ما</button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center lg:w-[23.541%] xl:w-[21.541%] max-xl:gap-x-1  h-full  max-lg:w-[35%] max-md:w-[40%]">
            <div className="relative  lg:w-[84.6428571%] max-lg:w-[100%]  h-[37px] ">
              <input
                type="text"
                className="w-full pr-10 outline-none p-[0.5rem] text-[#828282] h-full block bg-[#F6F6F6] lg:text-[10px] xl:text-[12px] max-md:text-[12px]  max-lg:text-[13px] placeholder:overflow-ellipsis"
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
        <div className="bg-black w-full h-fit">
          <div className="lg:w-[91.66%] mx-auto bg-black h-[47px] lg:pr-[40px] ">
            <nav className="text-[15px] max-md:text-[14px] max-lg:w-full max-lg:mx-auto max-lg:justify-center lg:w-[65.909%] h-full  text-white flex flex-row  items-center ">
              {data
                ?.map((elem: CATEGORY_DATA, index: number) => {
                  return (
                    <Link
                      key={elem.id}
                      className="text-center w-[17.03%] block h-full leading-[47px] hover:bg-[#500C0B] hover:border-solid hover:border ease-linear transition-all duration-200 hover:border-[#FF0C0C] border border-black outline-none"
                      href={`/category/${elem.name}`}
                    >
                      {elem.name}
                    </Link>
                  );
                })
                .reverse()}
            </nav>
          </div>
        </div>
      </header>
      <MobileHeader />
    </>
  );
};
export default Header;
