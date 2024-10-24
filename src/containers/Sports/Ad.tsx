import Image from "next/image";

const SportsAd = () => {
  return (
    <div className="w-[91.66666666666667%] h-[83px] md:mb-[98px] mx-auto">
      <Image
        src={"/images/coinex.png"}
        width={1320}
        height={83}
        alt="ad"
        className="min-h-[56px] mx-auto"
      />
    </div>
  );
};
export default SportsAd;
