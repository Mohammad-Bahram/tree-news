import Link from "next/link";

const SportsNav = () => {
  const sportnav: {
    id: number;
    title: string;
    direction: string;
  }[] = [{
    id: 1,
    title: "کشنی",
    direction:"/sports"
  }]
  return (
    <div className="pt-[20px] w-full h-fit mb-[24px]">
      <nav className="w-[69.1666667%] max-sm:w-full max-sm:bg-black max-sm:h-[47px] max-sm:px-4 max-sm:text-[13px] lg:w-[73%] lg:text-[13px] h-[20px] mx-auto max-sm:text-[white]   text-[#1D1D1D] text-[14px] mb-[24px] flex flex-row  items-center sm:text-[13px] sm:h-fit  gap-x-[36px] overflow-auto  scrollbar-thin scrollbar-thumb-[#AC2043]  scrollbar-track-white  ">
        <Link
          className="w-fit h-full   max-sm:min-w-[36px] lg:min-w-[36px] max-sm:hover:bg-[#500C0B] max-sm:hover:border-solid max-sm:hover:border ease-linear transition-all duration-200 max-sm:hover:border-[#FF0C0C] max-sm:border max-sm:border-black outline-none flex items-center "
          href={"/sports"}
        >
          کشتی
        </Link>
        <Link
          className="w-fit max-sm:h-full min-w-[63px] max-sm:hover:bg-[#500C0B] max-sm:hover:border-solid max-sm:hover:border ease-linear transition-all duration-200 max-sm:hover:border-[#FF0C0C] max-sm:border max-sm:border-black outline-none flex items-center "
          href={"/sports"}
        >
          وزنه برداری
        </Link>
        <Link
          className="w-fit min-w-[64px] max-sm:hover:bg-[#500C0B] max-sm:hover:border-solid max-sm:hover:border ease-linear transition-all duration-200 max-sm:hover:border-[#FF0C0C] max-sm:border max-sm:border-black outline-none flex items-center max-sm:h-full  "
          href={"/sports"}
        >
          فوتبال ملی
        </Link>
        <Link
          className="w-fit min-w-[72px] max-sm:hover:bg-[#500C0B] max-sm:hover:border-solid max-sm:hover:border ease-linear transition-all duration-200 max-sm:hover:border-[#FF0C0C] max-sm:border max-sm:border-black outline-none flex items-center max-sm:h-full  "
          href={"/sports"}
        >
          فوتبال جهان
        </Link>
        <Link
          className="w-fit  min-w-[48px] max-sm:hover:bg-[#500C0B] max-sm:hover:border-solid max-sm:hover:border ease-linear transition-all duration-200 max-sm:hover:border-[#FF0C0C] max-sm:border max-sm:border-black outline-none flex items-center max-sm:h-full"
          href={"/sports"}
        >
          بسکتبال
        </Link>
        <Link
          className="w-fit min-w-[51px] max-sm:hover:bg-[#500C0B] max-sm:hover:border-solid max-sm:hover:border ease-linear transition-all duration-200 max-sm:hover:border-[#FF0C0C] max-sm:border max-sm:border-black outline-none flex items-center max-sm:h-full"
          href={"/sports"}
        >
          لیگ برتر
        </Link>
        <Link
          className="w-fit min-w-[39px] max-sm:hover:bg-[#500C0B] max-sm:hover:border-solid max-sm:hover:border ease-linear transition-all duration-200 max-sm:hover:border-[#FF0C0C] max-sm:border max-sm:border-black outline-none flex items-center max-sm:h-full"
          href={"/sports"}
        >
          والیبال
        </Link>
        <Link
          className="w-fit min-w-[86px] max-sm:hover:bg-[#500C0B] max-sm:hover:border-solid max-sm:hover:border ease-linear transition-all duration-200 max-sm:hover:border-[#FF0C0C] max-sm:border max-sm:border-black outline-none flex items-center max-sm:h-full"
          href={"/sports"}
        >
          مدیریت ورزش
        </Link>
        <Link
          className="w-fit min-w-[117px] max-sm:hover:bg-[#500C0B] max-sm:hover:border-solid max-sm:hover:border ease-linear transition-all duration-200 max-sm:hover:border-[#FF0C0C] max-sm:border max-sm:border-black outline-none flex items-center max-sm:h-full"
          href={"/sports"}
        >
          المپیک و پاراالمپیک
        </Link>
        <Link
          className="w-fit min-w-[96px] max-sm:hover:bg-[#500C0B] max-sm:hover:border-solid max-sm:hover:border ease-linear transition-all duration-200 max-sm:hover:border-[#FF0C0C] max-sm:border max-sm:border-black outline-none flex items-center max-sm:h-full"
          href={"/sports"}
        >
          ورزش های رزمی
        </Link>
      </nav>
    </div>
  );
};
export default SportsNav;
