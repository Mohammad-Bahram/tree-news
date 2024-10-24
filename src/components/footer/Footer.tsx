import FooterCategory from "./FooterCategory";
import FooterEnd from "./FooterEnd";

const Footer = () => {
  return (
    <footer className="w-full h-fit bg-[#360807E5]">
      <div className="w-[91.6666667%] h-fit pt-[69px] pb-[72px]  brightness-90 mx-auto  ">
        <h3 className=" lg:text-[20px] text-white mb-[14px] ">درباره ما</h3>
        <p className="max-lg:text-[13px]  w-[88.1944444%] max-md:text-[11px] lg:text-[14px] lg:h-[96px] text-white mb-[83px] leading-[32px]">
          خبرگزاری Tree News با در نظر گرفتن دو حوزه‌ی وسیع کاری در داخل و خارج
          کشور تلاش دارد اهداف خود را در جهت آگاهی بخشی و بصیرت افزایی محقق
          سازد. رسانه ها نقش بی بدیلی در شکلگیری، جهت‌دهی و مهندسی افکار عمومی
          دارند. این نقش در عرصه جنگ نرم اهمیت و برجستگی بیشتری دارد، لذا میتوان
          از جبهه رسانه‌های استکبار جهانی به عنوان زرادخانه غرب در جنگ نرم
          یادکرد. خبرگزاری TREE NEWS  با در نظر گرفتن دو حوزه ی وسیع کاری در
          داخل و خارج کشور تلاش دارد اهداف خود را در جهت آگاهی بخشی و بصیرت
          افزایی محقق سازد.
        </p>
        \
        <div className="md:w-[42%] lg:w-[34.236111%] max-md:w-[55%] max-sm:w-[60%] h-[56px] relative mx-auto">
          <input
            className="outline-none text-white max-lg:text-[12px] lg:text-[14px] w-full h-full bg-[#282828] py-[18px] max-lg:pr-[12%] pr-[10.95%] max-md:pr-9 max-sm:text-[10px]"
            type="text"
            placeholder="کلید واژه خود را جستجو کنید"
          />
          <svg
            className="lg:w-[25.74px] max-lg:w-[22px] max-sm:w-[19px] max-sm:h-[20px] h-[26.34px] max-xl:h-[23px]  absolute top-[50%] translate-y-[-50%] right-2"
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6003 0.800049C4.97274 0.800049 0.399902 5.37289 0.399902 11.0005C0.399902 16.628 4.97274 21.2009 10.6003 21.2009C12.827 21.2009 14.8849 20.4837 16.5631 19.2696L24.4571 27.1449L26.1447 25.4573L18.3444 17.6382C19.8773 15.8522 20.8007 13.5342 20.8007 11.0005C20.8007 5.37289 16.2279 0.800049 10.6003 0.800049ZM10.6003 2.0001C15.5786 2.0001 19.6007 6.02214 19.6007 11.0005C19.6007 15.9788 15.5786 20.0008 10.6003 20.0008C5.62199 20.0008 1.59995 15.9788 1.59995 11.0005C1.59995 6.02214 5.62199 2.0001 10.6003 2.0001Z"
              fill="#FAFAFA"
            />
          </svg>
        </div>
      </div>
      <FooterCategory />
      <FooterEnd />
    </footer>
  );
};
export default Footer;
