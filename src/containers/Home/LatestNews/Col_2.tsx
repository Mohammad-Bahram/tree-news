"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Col_2 = () => {
  const router = useRouter();
  return (
    <div className="w-[27.2727273%] lg:max-w-[360px] max-lg:max-w-[446px] max-md:mb-12  h-fit max-md:w-[85%] flex flex-col justify-normal items-center  gap-y-[32px] ">
      <div className="w-full h-fit">
        <Image
          onClick={() => {
            router.push("/society");
          }}
          src={"/images/palestina.png"}
          alt="latest news"
          width={360}
          height={240}
          className="mb-[8px] w-full max-md:w-full cursor-pointer hover:opacity-70 ease-linear transition-all duration-200 "
        />
        <p className="text-[12px] text-[#333333]">
          اعضای شورای امنیت سازمان ملل متحد، مسکو را به دلیل حمله موشکی روز
          گذشته که بخشی از بزرگترین بیمارستان کودکان اوکراین را نابود کرد، مورد
          انتقاد قرار دادند.
        </p>
      </div>
      <div className="w-full h-fit">
        <Image
          onClick={() => {
            router.push("/society");
          }}
          src={"/images/mosquito.png"}
          alt="latest news"
          width={360}
          height={240}
          className="mb-[8px] cursor-pointer w-full max-md:w-full hover:opacity-70 ease-linear transition-all duration-200  "
        />
        <p className="text-[12px] text-[#333333]">
          اخیرا رئیس مرکز مدیریت بیماری‌های واگیردار وزارت بهداشت به دنبال
          مشاهده بیماری تب دنگی در ۷ استان کشور، در خصوص این بیماری هشدار داده
          است. اما تب دنگی چیست و چگونه منتقل می‌شود؟
        </p>
      </div>
      <div className="w-full h-fit">
        <Image
          onClick={() => {
            router.push("/society");
          }}
          src={"/images/oil.png"}
          alt="latest news"
          width={360}
          height={240}
          className="mb-[8px] hover:opacity-70 ease-linear transition-all duration-200 w-full max-md:w-full cursor-pointer "
        />
        <p className="text-[12px] text-[#333333]">
          انتظار می‌رود که صادرات نفت خام عربستان سعودی به چین در ماه آتی میلادی
          افزایش یابد و پس از ماه‌ها به حداقل ۴۴ میلیون بشکه برسد.
        </p>
      </div>
    </div>
  );
};
export default Col_2;
