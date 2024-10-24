import Special_col1 from "./Special/Special_col1";
import Special_col2 from "./Special/Special_col2";
import Special_col3 from "./Special/Special_col3";

const Special = () => {
  return (
    <>
      <h1 className="w-[91.66666666666667%] mx-auto text-[32px] mb-[24px] font-semibold text-[#282828]">
        ورزش
      </h1>

      <div className="w-[91.66666666666667%] h-fit mb-[120px]  mx-auto flex flex-row justify-between items-start max-lg:flex-col max-lg:items-center max-lg:gap-y-8 gap-x-[40px]   ">
        <Special_col1 />
        <Special_col2 />
        <Special_col3 />
      </div>
    </>
  );
};
export default Special;
