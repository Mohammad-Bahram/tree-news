"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Col_1 = () => {
  const router = useRouter();
  return (
    <div className="w-[33.030303%] max-md:w-[100%] max-md:items-center h-fit flex flex-col items-start justify-start  mb-3">
      <div className="hover:text-center hover:underline">
        <h3 className="mb-[8px] lg:text-[24px] md:text-[18px] sm:text-[14px] max-sm:text-[12px]">
          قبل از اینکه بایدن بتواند اوکراین را نجات دهد، باید از نشست ناتو برای
          نجات خود استفاده کند
        </h3>
        <Image
          onClick={() => {
            router.push("/society");
          }}
          className="mb-[8px]  transition duration-300 ease-in-out   hover:opacity-70 cursor-pointer"
          src={"/images/biden.png"}
          alt="latestNews"
          width={436}
          height={290}
        />
        <p className="leading-[19.6px] lg:text-[14px] md:text-[12px] max-md:text-[10px] text-justify text-[#4F4F4F]  mb-[11px] ">
          جو بایدن، رئیس‌جمهوری آمریکا روز سه‌شنبه ۹ ژوئیه (۱۹ تیر ۱۴۰۳) در نشست
          سران ناتو در واشنگتن وعده داد که با قدرت از اوکراین در برابر تهاجم
          روسیه دفاع خواهد کرد. او از این پلت فرم بین‌المللی استفاده کرد تا به
          متحدان داخلی و بین‌المللی نشان دهد که هنوز توانایی رهبری دارد.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 max-md:items-center max-md:justify-center gap-8">
        <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
          <Image
            onClick={() => {
              router.push("/society");
            }}
            src={"/images/rain.png"}
            alt="latestNews"
            width={199}
            height={115}
            objectFit="cover"
            className="mb-[8px] transition duration-300 ease-in-out hover:filter hover:grayscale cursor-pointer max-md:w-full"
          />
          <span className="lg:text-[12px]   text-[#3F3F3F] leading-[20.73px] max-lg:text-[11px] max-sm:text-[10px]">
            هشدار مهم امروز هواشناسی به پایتخت ‌نشینان
          </span>
        </div>
        <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-normal ">
          <Image
            onClick={() => {
              router.push("/society");
            }}
            src={"/images/uber.png"}
            alt="latestNews"
            width={199}
            height={115}
            objectFit="cover"
            className="mb-[8px] transition duration-300 ease-in-out hover:filter hover:grayscale cursor-pointer max-md:w-full"
          />
          <span className="max-sm:text-[9px] lg:text-[12px] text-[#3F3F3F]  max-lg:text-[11px]">
            خودروی خود را یک‌هفته به تاکسی‌ های اینترنتی بدهید و ۶۰ میلیون تومان
            جایزه بگیرید!{" "}
          </span>
        </div>
        <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-normal">
          <Image
            onClick={() => {
              router.push("/society");
            }}
            src={"/images/fruits.png"}
            alt="latestNews"
            width={199}
            height={115}
            objectFit="cover"
            className="mb-[8px] transition duration-300 ease-in-out hover:filter hover:grayscale cursor-pointer max-md:w-full"
          />
          <span className="max-sm:text-[9px] lg:text-[12px] text-[#3F3F3F]  max-lg:text-[11px]">
            این شش خوراکی را هرگز با معده خالی نخورید!
          </span>
        </div>
        <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-normal">
          <Image
            onClick={() => {
              router.push("/society");
            }}
            src={"/images/jet.png"}
            alt="latestNews"
            width={199}
            height={115}
            objectFit="cover"
            className="mb-[8px] transition duration-300 ease-in-out hover:filter hover:grayscale cursor-pointer max-md:w-full"
          />
          <span className="max-sm:text-[9px] lg:text-[12px] text-[#3F3F3F]  max-lg:text-[11px]">
            هدف اسرائیل از تجاوز به دمشق/ مقدمه برای درگیری
          </span>
        </div>
      </div>
    </div>
  );
};
export default Col_1;
