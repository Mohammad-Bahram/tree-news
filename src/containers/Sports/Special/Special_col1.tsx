import Image from "next/image";

const Special_col1 = () => {
  return (
    <div className="w-[47.34848484848485%]   flex flex-col items-start justify-start gap-y-[40px] max-lg:w-full max-lg:items-center   ">
      <Image
        src={"/images/special1.png"}
        width={625}
        height={416}
        alt="special"
        objectFit="cover"
        className="mb-[16px]"
      />
      <div className="w-full max-w-[625px] bg-slate-50 h-fit flex flex-row items-start gap-x-[4px] max-sm:flex-col max-sm:items-center max-sm:gap-y-2 max-sm:max-w-[390px]">
        <Image
          src={"/images/mayeli_kohan.png"}
          width={182}
          height={130}
          alt="special"
          className="max-sm:w-full sm:min-w-[182px]"
        />
        <div className="h-[130px] flex flex-col items-start justify-between max-sm:justify-start max-sm:h-fit max-sm:gap-y-2  ">
          <span className="block text-[#282828] text-[18px] max-sm:text-[16px] ">
            مایلی‌کهن: انتخاب لباس کادر درمان برای ملی‌پوشان را می‌پسندم
          </span>
          <p
            className=" text-[16px] text-[#828282] max-sm:text-[14px] 
          "
          >
            محمد مایلی‌کهن درباره جدایی ستارگان پرسپولیس و همچنین خریدهای
            استقلال صحبت‌های تازه‌ای را مطرح کرد.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[625px] max-sm:max-w-[390px] bg-slate-50 h-fit flex flex-row items-start gap-x-[4px] max-sm:flex-col max-sm:items-center max-sm:gap-y-2">
        <Image
          src={"/images/perspolis_player.png"}
          width={182}
          height={130}
          alt="special"
          className="max-sm:w-full sm:min-w-[182px]"
        />
        <div className="h-[130px] flex flex-col items-start justify-between max-sm:justify-start max-sm:h-fit max-sm:gap-y-2  ">
          <span className="block text-[#282828] text-[18px] max-sm:text-[16px] ">
            دلیل جدایی گلزن دربی از پرسپولیس مشخص شد
          </span>
          <p
            className=" text-[16px] text-[#828282] max-sm:text-[14px] 
          "
          >
            وقتی مهدی عبدی کنار زمین نشست و حتی در نیمه دوم به زمین نرفت می‌شد
            تشخیص داد اتفاقاتی پیرامون او افتاده و شاید این بازیکن دیگر جایی در
            پرسپولیس نداشته باشد.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[625px] bg-slate-50 h-fit flex flex-row items-start gap-x-[4px] max-sm:flex-col max-sm:items-center max-sm:gap-y-2 max-sm:max-w-[390px]">
        <Image
          src={"/images/azmun.png"}
          width={182}
          height={130}
          alt="special"
          className="max-sm:w-full sm:min-w-[182px]"
        />
        <div className="h-[130px] flex flex-col items-start justify-between max-sm:justify-start max-sm:h-fit max-sm:gap-y-2  ">
          <span className="block text-[#282828] text-[18px] max-sm:text-[16px] ">
            واکنش AFC به جدایی سردار آزمون از بایرلورکوزن
          </span>
          <p
            className=" text-[16px] text-[#828282] max-sm:text-[14px] 
          "
          >
            کنفدراسیون فوتبال آسیا به انتقال ستاره ایرانی به لیگ امارات واکنش
            نشان داد.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[625px] bg-slate-50 h-fit flex flex-row items-start gap-x-[4px] max-sm:flex-col max-sm:items-center max-sm:gap-y-2 max-sm:max-w-[390px]">
        <Image
          src={"/images/darvish.png"}
          width={182}
          height={130}
          alt="special"
          className="max-sm:w-full sm:min-w-[182px]"
        />
        <div className="h-[130px] flex flex-col items-start justify-between max-sm:justify-start max-sm:h-fit max-sm:gap-y-2  ">
          <span className="block text-[#282828] text-[18px] max-sm:text-[16px] ">
            توافق مخفیانه پرسپولیس و تراکتور، 7 میلیارد می‌دهیم بیرانوند برگردد
          </span>
          <p
            className=" text-[16px] text-[#828282] max-sm:text-[14px] 
          "
          >
            اختلاف میان علیرضا بیرانوند و باشگاه پرسپولیس به اوج خود رسیده و
            طرفین به هیچ وجه از مواضع خود عقب نمی‌نشینند.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Special_col1;
