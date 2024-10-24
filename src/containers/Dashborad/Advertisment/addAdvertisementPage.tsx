"use client";
import MediaUploader from "@/src/components/mediaUploader/Mediauploader";
import AdSelect from "./AdSelect";
import CustomDatePicker from "@/src/components/DatePicker/DatePicer";

const AddAdvertisementPage = () => {
  return (
    <div className="w-full h-fit max-lg:h-fit pb-[30px] max-md:items-center pt-[24px] bg-white flex flex-col justify-normal items-start rounded-[15px] px-4 max-sm:px-0 shadow-[0px_0px_5px_rgba(0,0,0,11)]">
      <h3 className="text-[16px] max-sm:text-[14px]  max-md:text-center max-sm:w-full mb-[40px]">
        ثبت / ویرایش تبلیغات{" "}
      </h3>
      <div className="flex w-full items-start justify-between max-md:flex-col max-md:items-center   ">
        <form className="w-[68.2015638575152%] px-[20px] max-md:w-full h-fit">
          <div className="flex items-center justify-between text-[#333333] text-[16px] max-sm:text-[14px] mb-[24px] max-md:flex-col max-md:gap-y-2 ">
            <label htmlFor="title">عنوان تبلیغ </label>
            <input
              type="text"
              className="w-[87.2611464968152%] pr-4 outline-none drop-shadow-md h-[50px] max-sm:text-[12px] text-[14px] bg-[#fafafa] rounded-[5px]"
              id="title"
            />
          </div>
          <div className="flex items-center justify-between text-[#333333] text-[16px] h-fit max-sm:text-[14px]  max-md:flex-col  max-md:gap-y-2">
            <label htmlFor="summery"> لینک</label>
            <input
              type="text"
              className="w-[87.2611464968152%] max-sm:text-[12px] h-[50px] pr-4 outline-none drop-shadow-md text-[14px] bg-[#fafafa] rounded-[5px] mb-[24px]"
              id="summery"
            />
          </div>
          <div className="lg:w-[87.2611464968152%] max-lg:w-fit   md:mr-auto  flex  gap-x-[59px] max-md:flex-col w-[86%] max-md:mx-auto mb-[24px]">
            <AdSelect />
          </div>
        </form>
        <div className="w-[20.417028670%] max-md:w-full max-md:flex max-md:justify-center max-sm:px-6  ">
          <MediaUploader />
        </div>
      </div>
      <div className="w-full h-fit flex flex-col items-center justify-between lg:flex-row gap-y-5 pr-5 max-lg:pr-0 mb-[80px]   ">
        <CustomDatePicker title="شروع" />
        <div className="">
          {" "}
          <CustomDatePicker title="انقضا" />
        </div>

        <div className="form-control mt-5">
          <label className="label cursor-pointer   xl:w-[198px] lg:min-w-[145px] max-lg:w-[198px] ">
            <span className="ml-[3.47523892%] text-[12px] ">فعال/غیر فعال</span>
            <input type="checkbox" className="toggle" defaultChecked />
          </label>
        </div>
      </div>

      <button className="w-[122px] h-[48px] bg-[#2F80ED] text-white text-[14px] font-bold rounded-[10px] ml-6 mr-auto active:scale-95 transition-all ease-linear duration-150 max-md:w-[95%] max-md:mx-0   ">
        ثبت خبر
      </button>
    </div>
  );
};

export default AddAdvertisementPage;
