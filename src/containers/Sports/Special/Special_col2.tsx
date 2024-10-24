import Image from "next/image";

const Special_col2 = () => {
  return (
    <div className="w-[23.86363636363636%] max-w-[318px] flex flex-col gap-y-[32px] items-center   bg-white max-lg:max-w-[497px] max-lg:w-full    ">
      <div className="flex flex-col lg:items-start max-lg:items-center justify-between ">
        <Image
          src={"/images/serieA.png"}
          width={318}
          height={227}
          alt="special "
          className="max-lg:w-[497px] max-sm:mb-3"
        />
        <h2 className="xl:text-[20px] lg:text-[17.5px]  mb-[40px] max-sm:text-[18px]  ">
          واکنش سری آ به شروع درخشان طارمی
        </h2>
        <hr className=" border-[#4F4F4F] w-full" />
      </div>
      <div>
        <span className="max-sm:block max-sm:text-center text-[16px] text-[#828282] text-center   ">
          عکس| شباهت لوگوی جدید تراکتور به لوگوی چند تیم اروپایی
        </span>
      </div>
      <div className="max-sm:w-full max-sm:text-center border-t-[1px] border-t-[#4F4F4F] pt-[14px]">
        <span className="text-[16px] text-[#828282]  ">
          مایلی‌کهن: انتخاب لباس کادر درمان برای ملی‌پوشان را می‌پسندم
        </span>
      </div>
      <div className="max-sm:w-full max-sm:text-center  border-t-[1px] border-t-[#4F4F4F] pt-[14px]">
        <span className="text-[16px] text-[#828282]  ">
          شباهت لوگوی جدید تراکتور به لوگوی چند تیم اروپایی
        </span>
      </div>
      <div className="max-sm:w-full max-sm:text-center  border-t-[1px] border-t-[#4F4F4F] pt-[14px]">
        <span className="text-[16px] text-[#828282]  ">
          تلوزیون چگونه میدان ورزش را به پلتفرم‌های مجازی واگذار کرد؟
        </span>
      </div>
      <div className="max-sm:w-full max-sm:text-center  border-t-[1px] border-t-[#4F4F4F] pt-[14px]">
        <span className="text-[16px] text-[#828282]  ">
          بزن بزن در بازی سپاهان و تیم ترکیه‌ای / بازی دقیقه 27 تمام شد
        </span>
      </div>
      <div className="max-sm:w-full max-sm:text-center  border-t-[1px] border-t-[#4F4F4F] pt-[14px]">
        <span className="text-[16px] text-[#828282]  ">
          فریاد (الله اکبر) جودوکار تاجیک بعد از غلبه بر نماینده اسرائیل
        </span>
      </div>
      <div className="max-sm:w-full max-sm:text-center  border-t-[1px] border-t-[#4F4F4F] pt-[14px]">
        <span className="text-[16px] text-[#828282]  ">
          محل میزبانی استقلال در آسیا مشخص شد
        </span>
      </div>
      <div className="max-sm:w-full max-sm:text-center  border-t-[1px] border-t-[#4F4F4F] pt-[14px]">
        <span className="text-[16px] text-[#828282]  ">
          گشت‌و‌گذار خانوادگی هادی چوپان در تابستان
        </span>
      </div>
    </div>
  );
};
export default Special_col2;
