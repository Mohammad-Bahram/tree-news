import Image from "next/image";

const LeftSide = () => {
  return (
    <div className="lg:w-[15.15151515151515%] md:w-[35%] lg:min-w-[265px] h-fit  flex flex-col gap-y-[5px] max-md:mx-auto max-md:flex-row max-md:flex-wrap   max-md:items-center   max-md:gap-5 max-md:w-full max-md:justify-between  max-[600px]:justify-center">
      <div className="w-full max-md:w-fit ">
        <Image
          src={"/images/sportsAdvertisment/bimeh_razi.png"}
          width={265}
          height={200}
          alt="ad"
          className="max-md:mx-auto"
        />
      </div>
      <div className="w-full flex flex-row justify-between gap-x-[5px] max-md:w-fit md:w-full">
        <Image
          src={"/images/sportsAdvertisment/blue.png"}
          width={130}
          height={200}
          alt="ad"
        />
        <Image
          src={"/images/sportsAdvertisment/location.png"}
          width={130}
          height={200}
          alt="ad"
        />
      </div>
      <div className="w-full max-md:w-fit ">
        <Image
          src={"/images/sportsAdvertisment/deepBlue.png"}
          width={265}
          height={71}
          alt="ad"
          className="max-h-[71px] max-md:max-h-none max-md:h-[100px] "
        />
      </div>
      <div className="w-full max-md:w-fit">
        <Image
          src={"/images/sportsAdvertisment/car.png"}
          width={265}
          height={100}
          alt="ad"
        />
      </div>
      <div className="w-full max-md:w-fit">
        <Image
          src={"/images/sportsAdvertisment/carPlane.png"}
          width={265}
          height={100}
          alt="ad"
          className="max-md:h-[200px] object-cover max-[587px]:h-[100px]"
        />
      </div>
      <div className="w-full flex flex-row justify-between gap-x-[5px] max-md:w-fit">
        <Image
          src={"/images/sportsAdvertisment/pink.png"}
          width={130}
          height={200}
          alt="ad"
        />
        <Image
          src={"/images/sportsAdvertisment/black.png"}
          width={130}
          height={200}
          alt="ad"
        />
      </div>
      <div className="w-full max-md:w-fit max-md:mx-auto">
        <Image
          src={"/images/sportsAdvertisment/meat.png"}
          width={265}
          height={102}
          alt="ad"
        />
      </div>
    </div>
  );
};
export default LeftSide;
