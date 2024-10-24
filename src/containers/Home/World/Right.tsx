import Image from "next/image";

const Right = () => {
  return (
    <div className="sm:w-[64.9242424%]  max-sm:w-full  h-fit flex flex-col items-start justify-start gap-y-[40px]  mb-6     ">
      <div className="w-full h-fit  flex flex-row gap-x-[10px] border border-solid border-b-[#AC2043] border-t-transparent border-x-transparent justify-between items-start pb-[14px] relative max-md:flex-col-reverse gap-y-4 ">
        <div className="w-[48.3080513%] max-md:w-full max-sm:w-fit max-sm:mx-auto max-sm:max-w-[433px] h-fit  ">
          <h3 className="xl:text-[24px] lg:text-[20px] max-md:mb-3  md:text-[15px] sm:text-[22px] font-semibold ">
            چند فرضیه درباره انتخابات ایران و آمریکا معنای پیروزی ترامپ چیست؟
          </h3>
          <span className="absolute bottom-[18px] text-black left-[57.8763127%] text-[10px] max-md:static  ">
            جهان 1‌ روز پیش
          </span>
        </div>
        <div className="w-fit max-md:w-fit h-fit max-sm:mx-auto max-sm:w-full   ">
          <Image
            src={"/images/trump.png"}
            width={433}
            height={283}
            alt="trump"
            className="  max-sm:mx-auto"
          />
        </div>
      </div>
      <div className="w-full h-fit flex flex-row gap-x-[53px]  overflow-auto max-sm:w-[95%] max-[476px]:w-full max-sm:mx-auto pr-3 scrollbar-thin scrollbar-thumb-[#AC2043]  scrollbar-track-white ">
        <div className="w-fit h-fit rel lg:min-w-[173px]">
          <Image
            src={"/images/military.png"}
            width={173}
            height={34}
            alt="image"
            className="max-lg:min-w-[173px] mb-1"
          />
          <span className="text-[14px] text-[#333333] block mb-[24px]">
            چگونه کودتا در بولیوی شکست خورد؟
          </span>
          <p className="text-[12px] text-[#3F3F3F] ">
            بولیوی با پشت سرگذاشتن یک روز نفس گیر توانست کودتای نظامیان این کشور
            علیه رئیس جمهور را خنثی کند.
          </p>
          <span className=" block text-left text-[10px] text-[#828282] mb-[14px]">
            جهان 2‌ روز پیش
          </span>
          <hr className="text-[#9F9F9F]" />
        </div>
        <div className="w-fit h-fit rel lg:min-w-[173px]">
          <Image
            src={"/images/money.png"}
            width={173}
            height={34}
            alt="image"
            className="max-lg:min-w-[173px] mb-1"
          />
          <span className="text-[14px] text-[#333333] block xl:leading-[14px] mb-[24px]">
            پیامدهای عدم تصویب اف ای تی اف/ موافقین و مخالفین چه می‌گویند؟
          </span>
          <p className="text-[12px] text-[#3F3F3F] ">
            یکی از مهمترین محورهای منازعه نامزدهای انتخابات ریاست جمهوری
          </p>
          <span className=" block text-left text-[10px] text-[#828282] mb-[14px]">
            جهان 2‌ روز پیش
          </span>
          <hr className="text-[#9F9F9F]" />
        </div>
        <div className="w-fit h-fit rel lg:min-w-[173px]">
          <Image
            src={"/images/woman.png"}
            width={173}
            height={34}
            alt="image"
            className="max-lg:min-w-[173px] mb-1"
          />
          <span className="text-[14px] text-[#333333] block mb-[24px]">
            آلمان از جمهوری اسلامی ایران کمک خواست
          </span>
          <p className="text-[12px] text-[#3F3F3F] ">
            وزیر خارجه آلمان با سرپرست وزارت خارجه ایران، خواستار کمک تهران برای
            جلوگیری از تشدید تنش در منطقه شد.
          </p>
          <span className=" block text-left text-[10px] text-[#828282] mb-[14px]">
            جهان 2‌ روز پیش
          </span>
          <hr className="text-[#9F9F9F]" />
        </div>
        <div className="w-fit h-fit rel lg:min-w-[173px]">
          <Image
            src={"/images/alief.png"}
            width={173}
            height={34}
            alt="image"
            className="max-lg:min-w-[173px] mb-1"
          />
          <span className="text-[14px] text-[#333333] block mb-[24px]">
            الهام علی‌اف پارلمان جمهوری آذربایجان را منحل کرد
          </span>
          <p className="text-[12px] text-[#3F3F3F] ">
            «الهام علی‌اف»، رئیس‌جمهور جمهوری آذربایجان، پارلمان این کشور را
            منحل کرد.
          </p>
          <span className=" block text-left text-[10px] text-[#828282] mb-[14px]">
            جهان 2‌ روز پیش
          </span>
          <hr className="text-[#9F9F9F]" />
        </div>
      </div>
    </div>
  );
};
export default Right;
