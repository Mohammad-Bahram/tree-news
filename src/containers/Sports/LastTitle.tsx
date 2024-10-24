import LeftSide from "./LastTitle/LeftSide";
import RightTitle from "./LastTitle/RightTitle";

const LastTitle = () => {
  return (
    <div className="w-[91.66666666666667%] h-fit  mx-auto">
      <span className="w-[22.72727272727273%] block text-[18px] border-t-[#4F4F4F] border-b-[1px] border-solid pb-[8px] text-[#282828] font-semibold mb-[24px] min-w-[300px]  ">
        آخرین عناوین خبری
      </span>
      <div className="w-full h-fit  flex flex-row justify-between items-start max-md:flex-col max-md:gap-y-4 ">
        <RightTitle />
        <LeftSide />
      </div>
    </div>
  );
};

export default LastTitle;
