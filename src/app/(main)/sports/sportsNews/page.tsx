import DateSelector from "@/src/components/dateSelector/DateSelector";
import Pagination from "@/src/components/pagination/Pagination";
import LeftSide from "@/src/containers/Sports/LastTitle/LeftSide";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <DateSelector />
      <div className="w-[91.66666666666667%] h-fit  mx-auto">
        <div className="w-full h-fit  flex flex-row justify-between items-start max-md:flex-col max-md:gap-y-4 pt-[56px] mb-[105px]">
          <div className="w-[67.27272727272727%] max-lg:w-full lg:h-fit max-lg:h-fit flex flex-col items-start justify-between gap-y-[40px]  ">
            <div
              className="w-full flex flex-row justify-start gap-x-[14px] max-[510px]:flex-col max-[510px]:items-center max-sm:gap-y-3  
       sm:max-h-[167px]  max-[510px]:max-w-[369px] max-[510px]:mx-auto  "
            >
              <Image
                src={"/images/France.png"}
                width={255}
                height={170.37}
                alt="france"
                className="min-[510px]:min-w-[200px] md:min-w-[250px] max-h-[167px] max-[510px]:w-full  max-[510px]:max-h-none"
              />
              <div className="flex flex-col items-start justify-between max-lg:justify-center max-lg:gap-y-2">
                <h3 className=" xl:text-[18px] lg:text-[15px] md:text-[14px] sm:text-[15px] font-medium max-sm:text-[13px]   xl:leading-[40px] lg:leading-[30px]   ">
                  توافق مخفیانه پرسپولیس و تراکتور، 7 میلیارد می‌دهیم بیرانوند
                  برگرددتوافق مخفیانه پرسپولیس و تراکتور، 7 میلیارد می‌دهیم
                  بیرانوند برگردد
                </h3>
                <p className="xl:text-[16px] lg:text-[13px] max-lg:text-[15px] sm:text-[13px] max-sm:text-[11px]  font-normal text-[#828282] xl:leading-[36px] lg:leading-[25px]    ">
                  <span className="lg:text-[16px] font-normal text-[#500C0B] max-sm:text-[13px] md:text-[14px]   ">
                    فوتبال جهان |
                  </span>
                  توافق مخفیانه پرسپولیس و تراکتور، 7 میلیارد می‌دهیم بیرانوند
                  برگرددتوافق مخفیانه پرسپولیس و تراکتور، 7 میلیارد می‌دهیم
                  بیرانوند برگردد
                </p>
              </div>
            </div>
            <div
              className="w-full flex flex-row justify-start gap-x-[14px] max-[510px]:flex-col max-[510px]:items-center 
       sm:max-h-[167px]  max-[510px]:max-w-[369px] max-[510px]:mx-auto  max-sm:gap-y-3  "
            >
              <Image
                src={"/images/Rezazadeh.png"}
                width={255}
                height={170.37}
                alt="france"
                className="min-[510px]:max-w-[200px] md:min-w-[250px] max-h-[167px] max-[510px]:w-full  max-[510px]:max-h-none "
              />
              <div className="flex flex-col items-start justify-between max-lg:justify-center max-lg:gap-y-2">
                <h3 className=" xl:text-[18px] lg:text-[15px] max-lg:text-[17px] sm:text-[15px] font-medium max-sm:text-[13px]   xl:leading-[40px] lg:leading-[30px]   ">
                  رضازاده عکس چه کسانی را روی دیوار اتاقش زده بود؟
                </h3>
                <p className="xl:text-[16px] lg:text-[13px] max-lg:text-[15px] sm:text-[13px] max-sm:text-[11px]  font-normal text-[#828282] xl:leading-[36px] lg:leading-[25px]    ">
                  <span className="text-[16px] font-normal text-[#500C0B] max-sm:text-[13px]    ">
                    شتی و وزنه برداری |
                  </span>
                  قهرمان سابق المپیک مهمان کافه خبر خبرآنلاین بود.
                </p>
              </div>
            </div>
            <div
              className="w-full flex flex-row justify-start gap-x-[14px] max-[510px]:flex-col max-[510px]:items-center 
       sm:max-h-[167px]  max-[510px]:max-w-[369px] max-[510px]:mx-auto max-sm:gap-y-3   "
            >
              <Image
                src={"/images/Koshti.png"}
                width={255}
                height={170.37}
                alt="france"
                className="min-[510px]:min-w-[200px] md:min-w-[250px] max-h-[167px] max-[510px]:w-full  max-[510px]:max-h-none"
              />
              <div className="flex flex-col items-start justify-between max-lg:justify-center max-lg:gap-y-2">
                <h3 className=" xl:text-[18px] lg:text-[15px] max-lg:text-[17px] sm:text-[15px] font-medium max-sm:text-[13px]   xl:leading-[40px] lg:leading-[30px]   ">
                  تک نگاری| امین کاویانی نژاد کیست؟ به دنبال مهم ترین مدال زندگی
                </h3>
                <p className="xl:text-[16px] lg:text-[13px] max-lg:text-[15px] sm:text-[13px] max-sm:text-[11px]  font-normal text-[#828282] xl:leading-[36px] lg:leading-[25px]    ">
                  <span className="text-[16px] font-normal text-[#500C0B] max-sm:text-[13px]    ">
                    شتی و وزنه برداری |
                  </span>
                  کاویانی‌نژاد در المپیک پاریس به دنبال آن است که بتواند مهمترین
                  مدال زندگی اش را کسب کند.
                </p>
              </div>
            </div>
            <div
              className="w-full flex flex-row justify-start gap-x-[14px] max-[510px]:flex-col max-[510px]:items-center 
       sm:max-h-[167px]  max-[510px]:max-w-[369px] max-[510px]:mx-auto max-sm:gap-y-3   "
            >
              <Image
                src={"/images/perspolis2.png"}
                width={255}
                height={170.37}
                alt="france"
                className="min-[510px]:max-w-[200px] md:min-w-[250px] max-h-[167px] max-[510px]:w-full  max-[510px]:max-h-none"
              />
              <div className="flex flex-col items-start justify-between max-lg:justify-center max-lg:gap-y-2">
                <h3 className=" xl:text-[18px] lg:text-[15px] max-lg:text-[17px] sm:text-[15px] font-medium max-sm:text-[13px]   xl:leading-[40px] lg:leading-[30px]   ">
                  عجیب اما واقعی، بازی دوستانه با پرسپولیس تکذیب شد!
                </h3>
                <p className="xl:text-[16px] lg:text-[13px] max-lg:text-[15px] sm:text-[13px] max-sm:text-[11px]  font-normal text-[#828282] xl:leading-[36px] lg:leading-[25px]    ">
                  <span className="text-[16px] font-normal text-[#500C0B] max-sm:text-[13px]    ">
                    لیگ برتر |
                  </span>
                  تیم ترکیه‌ای ادعا کرد که با پرسپولیس بازی نکرده است.
                </p>
              </div>
            </div>
            <div
              className="w-full flex flex-row justify-start gap-x-[14px] max-[510px]:flex-col max-[510px]:items-center 
       sm:max-h-[167px]  max-[510px]:max-w-[369px] max-[510px]:mx-auto max-sm:gap-y-3   "
            >
              <Image
                src={"/images/NahidKiani.png"}
                width={255}
                height={170.37}
                alt="france"
                className="min-[510px]:min-w-[200px] md:min-w-[250px] max-h-[167px] max-[510px]:w-full  max-[510px]:max-h-none"
              />
              <div className="flex flex-col items-start justify-between max-lg:justify-center max-lg:gap-y-2">
                <h3 className=" xl:text-[18px] lg:text-[15px] max-lg:text-[17px] sm:text-[15px] font-medium max-sm:text-[13px]   xl:leading-[40px] lg:leading-[30px]   ">
                  ناهید- کیمیا چشم در چشم رفیق قدیمی، سکانس دوم، هنوز یه نیمه
                  مونده از شب ما
                </h3>
                <p className="xl:text-[16px] lg:text-[13px] max-lg:text-[15px] sm:text-[13px] max-sm:text-[11px]  font-normal text-[#828282] xl:leading-[36px] lg:leading-[25px]    ">
                  <span className="text-[16px] font-normal text-[#500C0B] max-sm:text-[13px]    ">
                    ورزش های رزمی |
                  </span>
                  می گویند تاریخ دو بار تکرار می‌شود؛ یک بار کمدی و بار دوم
                  تراژدی. ناهید بخش تراژدی ماجرا را تجربه کرده و حالا نوبت روایت
                  کمیک است.
                </p>
              </div>
            </div>
            <div
              className="w-full flex flex-row justify-start gap-x-[14px] max-[510px]:flex-col max-[510px]:items-center 
       sm:max-h-[167px]  max-[510px]:max-w-[369px] max-[510px]:mx-auto  max-sm:gap-y-3  "
            >
              <Image
                src={"/images/Rezazadeh.png"}
                width={255}
                height={170.37}
                alt="france"
                className="min-[510px]:max-w-[200px] md:min-w-[250px] max-h-[167px] max-[510px]:w-full  max-[510px]:max-h-none "
              />
              <div className="flex flex-col items-start justify-between max-lg:justify-center max-lg:gap-y-2">
                <h3 className=" xl:text-[18px] lg:text-[15px] max-lg:text-[17px] sm:text-[15px] font-medium max-sm:text-[13px]   xl:leading-[40px] lg:leading-[30px]   ">
                  رضازاده عکس چه کسانی را روی دیوار اتاقش زده بود؟
                </h3>
                <p className="xl:text-[16px] lg:text-[13px] max-lg:text-[15px] sm:text-[13px] max-sm:text-[11px]  font-normal text-[#828282] xl:leading-[36px] lg:leading-[25px]    ">
                  <span className="text-[16px] font-normal text-[#500C0B] max-sm:text-[13px]    ">
                    شتی و وزنه برداری |
                  </span>
                  قهرمان سابق المپیک مهمان کافه خبر خبرآنلاین بود.
                </p>
              </div>
            </div>
            <div
              className="w-full flex flex-row justify-start gap-x-[14px] max-[510px]:flex-col max-[510px]:items-center 
       sm:max-h-[167px]  max-[510px]:max-w-[369px] max-[510px]:mx-auto max-sm:gap-y-3   "
            >
              <Image
                src={"/images/Koshti.png"}
                width={255}
                height={170.37}
                alt="france"
                className="min-[510px]:min-w-[200px] md:min-w-[250px] max-h-[167px] max-[510px]:w-full  max-[510px]:max-h-none"
              />
              <div className="flex flex-col items-start justify-between max-lg:justify-center max-lg:gap-y-2">
                <h3 className=" xl:text-[18px] lg:text-[15px] max-lg:text-[17px] sm:text-[15px] font-medium max-sm:text-[13px]   xl:leading-[40px] lg:leading-[30px]   ">
                  تک نگاری| امین کاویانی نژاد کیست؟ به دنبال مهم ترین مدال زندگی
                </h3>
                <p className="xl:text-[16px] lg:text-[13px] max-lg:text-[15px] sm:text-[13px] max-sm:text-[11px]  font-normal text-[#828282] xl:leading-[36px] lg:leading-[25px]    ">
                  <span className="text-[16px] font-normal text-[#500C0B] max-sm:text-[13px]    ">
                    شتی و وزنه برداری |
                  </span>
                  کاویانی‌نژاد در المپیک پاریس به دنبال آن است که بتواند مهمترین
                  مدال زندگی اش را کسب کند.
                </p>
              </div>
            </div>
            <div
              className="w-full flex flex-row justify-start gap-x-[14px] max-[510px]:flex-col max-[510px]:items-center 
       sm:max-h-[167px]  max-[510px]:max-w-[369px] max-[510px]:mx-auto max-sm:gap-y-3   "
            >
              <Image
                src={"/images/perspolis2.png"}
                width={255}
                height={170.37}
                alt="france"
                className="min-[510px]:max-w-[200px] md:min-w-[250px] max-h-[167px] max-[510px]:w-full  max-[510px]:max-h-none"
              />
              <div className="flex flex-col items-start justify-between max-lg:justify-center max-lg:gap-y-2">
                <h3 className=" xl:text-[18px] lg:text-[15px] max-lg:text-[17px] sm:text-[15px] font-medium max-sm:text-[13px]   xl:leading-[40px] lg:leading-[30px]   ">
                  عجیب اما واقعی، بازی دوستانه با پرسپولیس تکذیب شد!
                </h3>
                <p className="xl:text-[16px] lg:text-[13px] max-lg:text-[15px] sm:text-[13px] max-sm:text-[11px]  font-normal text-[#828282] xl:leading-[36px] lg:leading-[25px]    ">
                  <span className="text-[16px] font-normal text-[#500C0B] max-sm:text-[13px]    ">
                    لیگ برتر |
                  </span>
                  تیم ترکیه‌ای ادعا کرد که با پرسپولیس بازی نکرده است.
                </p>
              </div>
            </div>
            <div
              className="w-full flex flex-row justify-start gap-x-[14px] max-[510px]:flex-col max-[510px]:items-center 
       sm:max-h-[167px]  max-[510px]:max-w-[369px] max-[510px]:mx-auto max-sm:gap-y-3   "
            >
              <Image
                src={"/images/NahidKiani.png"}
                width={255}
                height={170.37}
                alt="france"
                className="min-[510px]:min-w-[200px] md:min-w-[250px] max-h-[167px] max-[510px]:w-full  max-[510px]:max-h-none"
              />
              <div className="flex flex-col items-start justify-between max-lg:justify-center max-lg:gap-y-2">
                <h3 className=" xl:text-[18px] lg:text-[15px] max-lg:text-[17px] sm:text-[15px] font-medium max-sm:text-[13px]   xl:leading-[40px] lg:leading-[30px]   ">
                  ناهید- کیمیا چشم در چشم رفیق قدیمی، سکانس دوم، هنوز یه نیمه
                  مونده از شب ما
                </h3>
                <p className="xl:text-[16px] lg:text-[13px] max-lg:text-[15px] sm:text-[13px] max-sm:text-[11px]  font-normal text-[#828282] xl:leading-[36px] lg:leading-[25px]    ">
                  <span className="text-[16px] font-normal text-[#500C0B] max-sm:text-[13px]    ">
                    ورزش های رزمی |
                  </span>
                  می گویند تاریخ دو بار تکرار می‌شود؛ یک بار کمدی و بار دوم
                  تراژدی. ناهید بخش تراژدی ماجرا را تجربه کرده و حالا نوبت روایت
                  کمیک است.
                </p>
              </div>
            </div>
            <div
              className="w-full flex flex-row justify-start gap-x-[14px] max-[510px]:flex-col max-[510px]:items-center 
       sm:max-h-[167px]  max-[510px]:max-w-[369px] max-[510px]:mx-auto  max-sm:gap-y-3  "
            >
              <Image
                src={"/images/Rezazadeh.png"}
                width={255}
                height={170.37}
                alt="france"
                className="min-[510px]:max-w-[200px] md:min-w-[250px] max-h-[167px] max-[510px]:w-full  max-[510px]:max-h-none "
              />
              <div className="flex flex-col items-start justify-between max-lg:justify-center max-lg:gap-y-2">
                <h3 className=" xl:text-[18px] lg:text-[15px] max-lg:text-[17px] sm:text-[15px] font-medium max-sm:text-[13px]   xl:leading-[40px] lg:leading-[30px]   ">
                  رضازاده عکس چه کسانی را روی دیوار اتاقش زده بود؟
                </h3>
                <p className="xl:text-[16px] lg:text-[13px] max-lg:text-[15px] sm:text-[13px] max-sm:text-[11px]  font-normal text-[#828282] xl:leading-[36px] lg:leading-[25px]    ">
                  <span className="text-[16px] font-normal text-[#500C0B] max-sm:text-[13px]    ">
                    شتی و وزنه برداری |
                  </span>
                  قهرمان سابق المپیک مهمان کافه خبر خبرآنلاین بود.
                </p>
              </div>
            </div>
            <div
              className="w-full flex flex-row justify-start gap-x-[14px] max-[510px]:flex-col max-[510px]:items-center 
       sm:max-h-[167px]  max-[510px]:max-w-[369px] max-[510px]:mx-auto max-sm:gap-y-3   "
            >
              <Image
                src={"/images/Koshti.png"}
                width={255}
                height={170.37}
                alt="france"
                className="min-[510px]:min-w-[200px] md:min-w-[250px] max-h-[167px] max-[510px]:w-full  max-[510px]:max-h-none"
              />
              <div className="flex flex-col items-start justify-between max-lg:justify-center max-lg:gap-y-2">
                <h3 className=" xl:text-[18px] lg:text-[15px] max-lg:text-[17px] sm:text-[15px] font-medium max-sm:text-[13px]   xl:leading-[40px] lg:leading-[30px]   ">
                  تک نگاری| امین کاویانی نژاد کیست؟ به دنبال مهم ترین مدال زندگی
                </h3>
                <p className="xl:text-[16px] lg:text-[13px] max-lg:text-[15px] sm:text-[13px] max-sm:text-[11px]  font-normal text-[#828282] xl:leading-[36px] lg:leading-[25px]    ">
                  <span className="text-[16px] font-normal text-[#500C0B] max-sm:text-[13px]    ">
                    شتی و وزنه برداری |
                  </span>
                  کاویانی‌نژاد در المپیک پاریس به دنبال آن است که بتواند مهمترین
                  مدال زندگی اش را کسب کند.
                </p>
              </div>
            </div>
            <div
              className="w-full flex flex-row justify-start gap-x-[14px] max-[510px]:flex-col max-[510px]:items-center 
       sm:max-h-[167px]  max-[510px]:max-w-[369px] max-[510px]:mx-auto max-sm:gap-y-3   "
            >
              <Image
                src={"/images/perspolis2.png"}
                width={255}
                height={170.37}
                alt="france"
                className="min-[510px]:max-w-[200px] md:min-w-[250px] max-h-[167px] max-[510px]:w-full  max-[510px]:max-h-none"
              />
              <div className="flex flex-col items-start justify-between max-lg:justify-center max-lg:gap-y-2">
                <h3 className=" xl:text-[18px] lg:text-[15px] max-lg:text-[17px] sm:text-[15px] font-medium max-sm:text-[13px]   xl:leading-[40px] lg:leading-[30px]   ">
                  عجیب اما واقعی، بازی دوستانه با پرسپولیس تکذیب شد!
                </h3>
                <p className="xl:text-[16px] lg:text-[13px] max-lg:text-[15px] sm:text-[13px] max-sm:text-[11px]  font-normal text-[#828282] xl:leading-[36px] lg:leading-[25px]    ">
                  <span className="text-[16px] font-normal text-[#500C0B] max-sm:text-[13px]    ">
                    لیگ برتر |
                  </span>
                  تیم ترکیه‌ای ادعا کرد که با پرسپولیس بازی نکرده است.
                </p>
              </div>
            </div>
            <div
              className="w-full flex flex-row justify-start gap-x-[14px] max-[510px]:flex-col max-[510px]:items-center 
       sm:max-h-[167px]  max-[510px]:max-w-[369px] max-[510px]:mx-auto max-sm:gap-y-3   "
            >
              <Image
                src={"/images/NahidKiani.png"}
                width={255}
                height={170.37}
                alt="france"
                className="min-[510px]:min-w-[200px] md:min-w-[250px] max-h-[167px] max-[510px]:w-full  max-[510px]:max-h-none"
              />
              <div className="flex flex-col items-start justify-between max-lg:justify-center max-lg:gap-y-2">
                <h3 className=" xl:text-[18px] lg:text-[15px] max-lg:text-[17px] sm:text-[15px] font-medium max-sm:text-[13px]   xl:leading-[40px] lg:leading-[30px]   ">
                  ناهید- کیمیا چشم در چشم رفیق قدیمی، سکانس دوم، هنوز یه نیمه
                  مونده از شب ما
                </h3>
                <p className="xl:text-[16px] lg:text-[13px] max-lg:text-[15px] sm:text-[13px] max-sm:text-[11px]  font-normal text-[#828282] xl:leading-[36px] lg:leading-[25px]    ">
                  <span className="text-[16px] font-normal text-[#500C0B] max-sm:text-[13px]    ">
                    ورزش های رزمی |
                  </span>
                  می گویند تاریخ دو بار تکرار می‌شود؛ یک بار کمدی و بار دوم
                  تراژدی. ناهید بخش تراژدی ماجرا را تجربه کرده و حالا نوبت روایت
                  کمیک است.
                </p>
              </div>
            </div>
          </div>
          <LeftSide />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default page;
