import Image from "next/image";

const FirstAd = () => {
  return (
    <div className="w-full h-fit py-[30px] flex flex-row justify-center items-center bg-[#1D1D1D]  gap-x-[84px]   max-lg:flex-col max-lg:gap-y-8 ">
      <div className="w-[81.3194444%] h-fit flex flex-row justify-between items-center md:gap-x-[84px] max-md:flex-col max-md:gap-y-5 ">
        <Image
          src={"/images/hostIran.png"}
          alt="advertisment"
          width={728}
          height={90}
        />
        <Image
          src={"/images/wallet.png"}
          alt="advertisment"
          width={359}
          height={110}
          className="max-md:w-[280px] max-sm:w-[210px] "
        />
      </div>
    </div>
  );
};
export default FirstAd;
