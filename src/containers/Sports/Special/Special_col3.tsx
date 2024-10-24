import Image from "next/image";

const Special_col3 = () => {
  return (
    <div className="w-[22.72727272727273%] max-w-[300px] h-fit flex flex-col gap-y-[24px] max-lg:max-w-[625px]  max-lg:w-full ">
      <div
        className="w-full max-lg:flex max-lg:flex-row max-lg:justify-between 
      max-[656px]:flex-col max-[656px]:items-center max-[656px]:gap-y-2 mb-[40px]"
      >
        <Image
          src={"/images/tara.png"}
          width={300}
          height={90}
          alt="advertisment "
        />
        <Image
          src={"/images/tara.png"}
          width={300}
          height={90}
          alt="advertisment "
        />
      </div>
      <h3 className="w-full border-t-[#4F4F4F] border-t-[1px] pt-2">
        لیگ برتر
      </h3>
      <div className="max-lg:flex max-lg:flex-row max-lg:flex-wrap max-lg:justify-between max-lg:gap-y-4 gap-x-2 max-[656px]:flex-col max-[656px]:items-center ">
        <div className="w-fit ">
          <Image
            src={"/images/arsalan_motahari.png"}
            width={300}
            height={200}
            alt="arsalan motahri"
            className="mb-[8px]"
          />
          <span className="text-[16px]  text-black">
            گیتاریست استقلال در راه مس رفسنجان
          </span>
        </div>
        <div className="w-fit max-w-[300px] ">
          <Image
            src={"/images/tractor.png"}
            width={300}
            height={200}
            alt="arsalan motahri"
            className="mb-[8px]"
          />
          <span className="text-[16px]  text-black">
            عکس| شباهت لوگوی جدید تراکتور به لوگوی چند تیم اروپایی
          </span>
        </div>
        <div className="w-fit max-lg:mx-auto max-w-[300px]">
          <Image
            src={"/images/gendoz.png"}
            width={300}
            height={200}
            alt="arsalan motahri"
            className="mb-[8px]"
          />
          <span className="text-[16px]  text-black">
            معرفی جانشین بیرانوند، الکسیس گندوز و رویای درخشان در سومین قاره
          </span>
        </div>
      </div>
    </div>
  );
};
export default Special_col3;
