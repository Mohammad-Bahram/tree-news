import Link from "next/link";
import WorldCategory from "./category/WorldCategory";
import PoliticsCategory from "./category/PoliticsCategory";
import EconomyCategory from "./category/EconomyCategory";
import SportsCategory from "./category/SportsCategory";
import CultureCategory from "./category/CultureCategory";
import SocietyCategory from "./category/SocietyCategory";
import HealthCategory from "./category/HealthCategory";
import ITCategory from "./category/ITcategory";

const FooterCategory = () => {
  return (
    <div className="w-full h-fit   flex flex-row justify-around gap-y-[58px] flex-wrap text-white xl:text-[16px] lg:text-[13px] max-md:hidden">
      <div className="w-[91.6666667%] mx-auto flex flex-row justify-between px-2  gap-y-[58px] flex-wrap max-lg:gap-x-5">
        <WorldCategory />
        <PoliticsCategory />
        <EconomyCategory />
        <SportsCategory />
        <CultureCategory />
        <HealthCategory />
        <div className="max-lg:block lg:hidden">
          <SocietyCategory />
        </div>
        <div className="max-lg:block lg:hidden">
          <ITCategory />
        </div>
      </div>
      <div className="mx-auto px-2 flex flex-row gap-20 w-[91.6666667%] mb-[72px] max-lg:hidden">
        <SocietyCategory />
        <ITCategory />
      </div>
    </div>
  );
};

export default FooterCategory;
