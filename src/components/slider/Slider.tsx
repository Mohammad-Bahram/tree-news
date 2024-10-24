import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import clsx from "clsx";
SwiperCore.use([Navigation]);
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

type PropType = {
  margin_botton?: number;
};
const Slider: React.FC<PropType> = ({ margin_botton }) => {
  return (
    <div
      className={clsx(
        "w-full bg-[#333333]",
        margin_botton && `mb-[${margin_botton}px]`
      )}
    >
      <div className="pt-[32px] w-[91.6666667%] mx-auto  relative pb-[38px]">
        <span className="inline-block text-[20px] text-white mb-[16px]">
          ببینید
        </span>
        <Swiper
          slidesPerView={4}
          spaceBetween={32}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper "
        >
          <SwiperSlide className="flex flex-col gap-[7px] ">
            <div className="relative ml-auto ">
              <Image
                src={"/images/slider/esteghlal.jfif"}
                width={315}
                height={198}
                alt="sports"
                className=" rounded-[5px] min-w-[315px] md:max-w-[315px] max-[347px]:min-w-[300px] "
              />
              <span className="flex flex-row py-1 px-2 justify-center items-center gap-3 rounded-[3px] bg-[#45454570]  w-fit absolute bottom-[10px] left-[16px] ">
                <span className="text-white text-[16px]">2:31</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#500C0B"
                    fill-opacity="0.99"
                  />
                  <path
                    d="M18.3271 12.2182L9.16351 17.5088L9.16351 6.92753L18.3271 12.2182Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-[14px] ml-auto text-white h-[61px]">
              یک میهمان ویژه در بازی تدارکاتی استقلال
            </h3>
            <p className="text-[12px] text-[#FAFAFA] text-right">
              پرسپولیس در فصل نقل‌وانتقالات با حواشی و اتفاقات زیادی مواجه شده و
              جدایی چند بازیکن نگرانی هواداران را به همراه داشته است.
            </p>
            <span className="text-[#E0E0E0]  mr-auto text-[10px]">
              1402/5/2
            </span>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col gap-[7px] ">
            <div className="relative ml-auto ">
              <Image
                src={"/images/slider/al-hilal.jfif"}
                width={315}
                height={198}
                alt="sports"
                className=" rounded-[5px] min-w-[315px] md:max-w-[315px] max-[347px]:min-w-[300px] "
              />
              <span className="flex flex-row py-1 px-2 justify-center items-center gap-3 rounded-[3px] bg-[#45454570]  w-fit absolute bottom-[10px] left-[16px] ">
                <span className="text-white text-[16px]">2:31</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#500C0B"
                    fill-opacity="0.99"
                  />
                  <path
                    d="M18.3271 12.2182L9.16351 17.5088L9.16351 6.92753L18.3271 12.2182Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-[14px] ml-auto text-white h-[61px] text-right">
              با وجود نارضایتی هواداران؛ پرسپولیس بازنده نقل‌وانتقالات نیست!
            </h3>
            <p className="text-[12px] text-[#FAFAFA] text-right">
              پرسپولیس در فصل نقل‌وانتقالات با حواشی و اتفاقات زیادی مواجه شده و
              جدایی چند بازیکن نگرانی هواداران را به همراه داشته است.
            </p>
            <span className="text-[#E0E0E0]  mr-auto text-[10px]">
              1402/5/2
            </span>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col gap-[7px] ">
            <div className="relative ml-auto ">
              <Image
                src={"/images/slider/azadi-stadium.jfif"}
                width={315}
                height={198}
                alt="sports"
                className=" rounded-[5px] min-w-[315px] md:max-w-[315px] max-[347px]:min-w-[300px] "
              />
              <span className="flex flex-row py-1 px-2 justify-center items-center gap-3 rounded-[3px] bg-[#45454570]  w-fit absolute bottom-[10px] left-[16px] ">
                <span className="text-white text-[16px]">2:31</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#500C0B"
                    fill-opacity="0.99"
                  />
                  <path
                    d="M18.3271 12.2182L9.16351 17.5088L9.16351 6.92753L18.3271 12.2182Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-[14px] ml-auto text-white h-[61px] text-right">
              تیم ملی به دنبال زمین بازی، عربستان به دنبال میزبانی جام جهانی!
            </h3>
            <p className="text-[12px] text-[#FAFAFA] text-right">
              پرسپولیس در فصل نقل‌وانتقالات با حواشی و اتفاقات زیادی مواجه شده و
              جدایی چند بازیکن نگرانی هواداران را به همراه داشته است.
            </p>
            <span className="text-[#E0E0E0]  mr-auto text-[10px]">
              1402/5/2
            </span>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col gap-[7px] ">
            <div className="relative ml-auto ">
              <Image
                src={"/images/slider/perspolis.jfif"}
                width={315}
                height={198}
                alt="sports"
                className=" rounded-[5px] min-w-[315px] md:max-w-[315px] max-[347px]:min-w-[300px] "
              />
              <span className="flex flex-row py-1 px-2 justify-center items-center gap-3 rounded-[3px] bg-[#45454570]  w-fit absolute bottom-[10px] left-[16px] ">
                <span className="text-white text-[16px]">2:31</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#500C0B"
                    fill-opacity="0.99"
                  />
                  <path
                    d="M18.3271 12.2182L9.16351 17.5088L9.16351 6.92753L18.3271 12.2182Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-[14px] ml-auto text-white h-[61px] text-right">
              با وجود نارضایتی هواداران؛ پرسپولیس بازنده نقل‌وانتقالات نیست!
            </h3>
            <p className="text-[12px] text-[#FAFAFA] text-right">
              ورزشگاه آزادی به دلیل عملیات بازسازی توانایی میزبانی در لیگ و
              بازی‌های ملی را برای فصل پیش رو ندارد.
            </p>
            <span className="text-[#E0E0E0]  mr-auto text-[10px]">
              1402/5/3
            </span>
          </SwiperSlide>{" "}
          <SwiperSlide className="flex flex-col gap-[7px] ">
            <div className="relative ml-auto ">
              <Image
                src={"/images/slider/esteghlal.jfif"}
                width={315}
                height={198}
                alt="sports"
                className=" rounded-[5px] min-w-[315px] md:max-w-[315px] max-[347px]:min-w-[300px] "
              />
              <span className="flex flex-row py-1 px-2 justify-center items-center gap-3 rounded-[3px] bg-[#45454570]  w-fit absolute bottom-[10px] left-[16px] ">
                <span className="text-white text-[16px]">2:31</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#500C0B"
                    fill-opacity="0.99"
                  />
                  <path
                    d="M18.3271 12.2182L9.16351 17.5088L9.16351 6.92753L18.3271 12.2182Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-[14px] ml-auto text-white h-[61px]">
              یک میهمان ویژه در بازی تدارکاتی استقلال
            </h3>
            <p className="text-[12px] text-[#FAFAFA] text-right">
              پرسپولیس در فصل نقل‌وانتقالات با حواشی و اتفاقات زیادی مواجه شده و
              جدایی چند بازیکن نگرانی هواداران را به همراه داشته است.
            </p>
            <span className="text-[#E0E0E0]  mr-auto text-[10px]">
              1402/5/2
            </span>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col gap-[7px] ">
            <div className="relative ml-auto ">
              <Image
                src={"/images/slider/al-hilal.jfif"}
                width={315}
                height={198}
                alt="sports"
                className=" rounded-[5px] min-w-[315px] md:max-w-[315px] max-[347px]:min-w-[300px] "
              />
              <span className="flex flex-row py-1 px-2 justify-center items-center gap-3 rounded-[3px] bg-[#45454570]  w-fit absolute bottom-[10px] left-[16px] ">
                <span className="text-white text-[16px]">2:31</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#500C0B"
                    fill-opacity="0.99"
                  />
                  <path
                    d="M18.3271 12.2182L9.16351 17.5088L9.16351 6.92753L18.3271 12.2182Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-[14px] ml-auto text-white h-[61px] text-right">
              با وجود نارضایتی هواداران؛ پرسپولیس بازنده نقل‌وانتقالات نیست!
            </h3>
            <p className="text-[12px] text-[#FAFAFA] text-right">
              پرسپولیس در فصل نقل‌وانتقالات با حواشی و اتفاقات زیادی مواجه شده و
              جدایی چند بازیکن نگرانی هواداران را به همراه داشته است.
            </p>
            <span className="text-[#E0E0E0]  mr-auto text-[10px]">
              1402/5/2
            </span>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col gap-[7px] ">
            <div className="relative ml-auto ">
              <Image
                src={"/images/slider/azadi-stadium.jfif"}
                width={315}
                height={198}
                alt="sports"
                className=" rounded-[5px] min-w-[315px] md:max-w-[315px] max-[347px]:min-w-[300px] "
              />
              <span className="flex flex-row py-1 px-2 justify-center items-center gap-3 rounded-[3px] bg-[#45454570]  w-fit absolute bottom-[10px] left-[16px] ">
                <span className="text-white text-[16px]">2:31</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#500C0B"
                    fill-opacity="0.99"
                  />
                  <path
                    d="M18.3271 12.2182L9.16351 17.5088L9.16351 6.92753L18.3271 12.2182Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-[14px] ml-auto text-white h-[61px] text-right">
              تیم ملی به دنبال زمین بازی، عربستان به دنبال میزبانی جام جهانی!
            </h3>
            <p className="text-[12px] text-[#FAFAFA] text-right">
              پرسپولیس در فصل نقل‌وانتقالات با حواشی و اتفاقات زیادی مواجه شده و
              جدایی چند بازیکن نگرانی هواداران را به همراه داشته است.
            </p>
            <span className="text-[#E0E0E0]  mr-auto text-[10px]">
              1402/5/2
            </span>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col gap-[7px] ">
            <div className="relative ml-auto ">
              <Image
                src={"/images/slider/perspolis.jfif"}
                width={315}
                height={198}
                alt="sports"
                className=" rounded-[5px] min-w-[315px] md:max-w-[315px] max-[347px]:min-w-[300px] "
              />
              <span className="flex flex-row py-1 px-2 justify-center items-center gap-3 rounded-[3px] bg-[#45454570]  w-fit absolute bottom-[10px] left-[16px] ">
                <span className="text-white text-[16px]">2:31</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#500C0B"
                    fill-opacity="0.99"
                  />
                  <path
                    d="M18.3271 12.2182L9.16351 17.5088L9.16351 6.92753L18.3271 12.2182Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-[14px] ml-auto text-white h-[61px] text-right">
              با وجود نارضایتی هواداران؛ پرسپولیس بازنده نقل‌وانتقالات نیست!
            </h3>
            <p className="text-[12px] text-[#FAFAFA] text-right">
              ورزشگاه آزادی به دلیل عملیات بازسازی توانایی میزبانی در لیگ و
              بازی‌های ملی را برای فصل پیش رو ندارد.
            </p>{" "}
            <span className="text-[#E0E0E0]  mr-auto text-[10px]">
              1402/5/2
            </span>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-next custom-next  ">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.799825 8.51001L2.76983 10.48L5.97982 13.69C6.65982 14.36 7.81982 13.88 7.81982 12.92L7.81982 6.69001L7.81983 1.08001C7.81983 0.120012 6.65983 -0.359988 5.97983 0.320012L0.799825 5.50001C-0.0301745 6.32001 -0.0301747 7.68001 0.799825 8.51001Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="swiper-button-prev custom-prev">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.799825 8.51001L2.76983 10.48L5.97982 13.69C6.65982 14.36 7.81982 13.88 7.81982 12.92L7.81982 6.69001L7.81983 1.08001C7.81983 0.120012 6.65983 -0.359988 5.97983 0.320012L0.799825 5.50001C-0.0301745 6.32001 -0.0301747 7.68001 0.799825 8.51001Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Slider;
