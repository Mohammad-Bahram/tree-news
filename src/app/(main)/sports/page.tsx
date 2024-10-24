"use client";
import Slider from "@/src/components/slider/Slider";
import SportsAd from "@/src/containers/Sports/Ad";
import LastTitle from "@/src/containers/Sports/LastTitle";
import Special from "@/src/containers/Sports/Special";
import SportsNav from "@/src/containers/Sports/sportsNav";
import Link from "next/link";

const Sports = () => {
  return (
    <>
      <SportsNav />
      <Special />
      <Slider margin_botton={72} />
      <LastTitle />
      <Link
        href={"/sports/sportsNews"}
        className="block w-[130px] text-center leading-[56px] h-[56px] rounded-[5px] bg-[#500C0B] text-white text-[16px] mt-[72px] md:mr-[30.48611111111111%] max-md:w-[91%] max-md:mt-[45px] max-md:block max-md:mx-auto mb-[120px]"
      >
        بیشتر
      </Link>
      <SportsAd />
    </>
  );
};
export default Sports;
