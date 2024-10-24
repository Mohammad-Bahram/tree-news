"use client";
import dynamic from "next/dynamic";
const LazyMediaUploader = dynamic(
  () => import("@/src/components/mediaUploader/Mediauploader"),
  { ssr: false }
);
const LazyCategorySelectNews = dynamic(() => import("./CategorySelectNews"), {
  ssr: false,
});
const LazyStickSelectNews = dynamic(() => import("./StickSelectNews"), {
  ssr: false,
});
const AddNews = () => {
  return (
    <div
      suppressHydrationWarning
      className="w-full h-fit max-lg:h-fit pb-[30px] max-md:items-center pt-[24px] bg-white flex flex-col justify-normal items-start rounded-[15px] px-4 max-sm:px-0 shadow-[0px_0px_5px_rgba(0,0,0,11)]"
    >
      <h3 className="text-[16px] max-sm:text-[14px]  max-md:text-center max-sm:w-full mb-[40px]">
        افزودن خبر جدید
      </h3>
      <div className="flex w-full items-start justify-between max-md:flex-col mb-[40px] max-md:items-center   ">
        <form className="w-[68.2015638575152%] max-md:w-full h-fit">
          <div className="flex items-center justify-between text-[#333333] text-[16px] max-sm:text-[14px] mb-[24px] max-md:flex-col max-md:gap-y-2 ">
            <label htmlFor="title">عنوان خبر</label>
            <input
              type="text"
              className="w-[87.2611464968152%] pr-4 outline-none drop-shadow-md h-[50px] max-sm:text-[12px] text-[14px] bg-[#fafafa] rounded-[5px]"
              id="title"
            />
          </div>
          <div className="flex items-center justify-between text-[#333333] text-[16px] max-sm:text-[14px]  max-md:flex-col max-md:gap-y-2">
            <label htmlFor="summery"> توضیح کوتاه</label>
            <input
              type="text"
              className="w-[87.2611464968152%] max-sm:text-[12px] h-[147px] pr-4 outline-none drop-shadow-md text-[14px] bg-[#fafafa] rounded-[5px] mb-[24px]"
              id="summery"
            />
          </div>
          <div className="md:w-[87.2611464968152%]   md:mr-auto  flex  gap-x-[59px] max-md:flex-col w-[86%] max-md:mx-auto mb-[24px]">
            <LazyCategorySelectNews />
            <LazyStickSelectNews />
          </div>
          <div className="flex items-center justify-between text-[#333333] text-[16px] max-sm:text-[14px] mb-[24px] max-md:flex-col max-md:gap-y-2 ">
            <label htmlFor="keyWorld">کلمات کلیدی </label>
            <input
              type="text"
              className="w-[87.2611464968152%] pr-4 outline-none drop-shadow-md h-[50px] max-sm:text-[12px] text-[14px] bg-[#fafafa] rounded-[5px]"
              id="keyWorld"
              placeholder="فوتبال، بیرانوند، ورزش"
            />
          </div>
        </form>
        <div className="w-[20.417028670%] max-md:w-full max-md:flex max-md:justify-center max-sm:px-6  ">
          <LazyMediaUploader />
        </div>
      </div>
      <h3 className="text-[16px] mb-3">متن خبر</h3>
      {/* <CkEditor /> */}
      <button className="w-[122px] h-[48px] bg-[#2F80ED] text-white text-[14px] font-bold rounded-[10px] mx-auto active:scale-95 transition-all ease-linear duration-150   ">
        ثبت خبر
      </button>
    </div>
  );
};

export default AddNews;
