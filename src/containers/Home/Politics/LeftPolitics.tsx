import Image from "next/image";

const LeftPolitics = () => {
  return (
    <div className="max-sm:max-w-[365px] sm:w-[27.6515152%] max-sm:w-full h-fit  flex flex-col justify-normal items-center gap-y-[24px] ">
      <div className="border-solid w-fit h-fit border border-x-transparent border-t-transparent border-b-[#9F9F9F] mb-[24px] ">
        <Image
          src={"/images/parlemant.png"}
          width={365}
          height={165}
          alt="parlemant"
          className="mx-auto mb-1"
        />
        <span className="block md:text-[14px] text-black mb-[23px] max-md:text-[13px] ">
          بیگدلی: با برد ترامپ اوضاع وخیم‌تر هم می‌شود / پیروزی راست افراطی در
          اروپا خطرناک است
        </span>
        <p className="text-[#3F3F3F] mb-[14px] md:text-[12px] max-md:text-[11px] ">
          شش میلیون مسلمان در فرانسه وجود دارد که با برخورد با آنها در فرانسه
          شاهد آشوب گسترده اجتماعی خواهیم بود. ارتباط پاریس با کشورهای مسلمان هم
          دچار خلل خواهد شد و بازار کشورهای اسلامی را از دست خواهد داد.
        </p>
      </div>
      <div className="border-solid w-full h-fit border border-x-transparent border-t-transparent border-b-[#9F9F9F] mb-[24px]">
        <span className="block md:text-[14px] text-black mb-[23px] max-md:text-[13px] ">
          بررسی مناظره جنجالی بایدن و ترامپ/بازی به نفع جمهوری‌ خواهان/ واکنش‌ها
          چه بود؟
        </span>
        <p className="text-[#3F3F3F] mb-[14px] md:text-[12px] max-md:text-[11px] ">
          این نخستین مناظره‌ در تاریخ انتخابات ریاست جمهوری آمریکاست که در آن یک
          رئیس‌جمهور مستقر با سلف خود یعنی رئیس‌جمهور سابق در برابر دیدگان
          میلیون‌ها بیننده تلویزیونی قرار می‌گیرد.
        </p>
      </div>
      <div className="border-solid w-full h-fit border border-x-transparent border-t-transparent border-b-[#9F9F9F] ">
        <span className="block md:text-[14px] text-black mb-[23px] max-md:text-[13px] ">
          سید حسن نصرالله: آینده ملت‌ها و حکومت‌ها به تحولات جمهوری اسلامی ایران
          وابسته است
        </span>
        <p className="text-[#3F3F3F] mb-[14px] md:text-[12px] max-md:text-[11px] ">
          سید حسن نصرالله، دبیرکل حزب‌الله لبنان در سخنانی در چهلمین روز شهادت
          شهید آیت‌الله رئیسی و همراهانش به ملت ایران مجددا تسلیت گفت.
        </p>
      </div>
    </div>
  );
};
export default LeftPolitics;
