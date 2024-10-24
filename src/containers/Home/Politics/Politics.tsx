import LeftPolitics from "./LeftPolitics";
import RightPolitics from "./RightPolitics";

const Politics = () => {
  return (
    <div className="w-full h-fit py-[72px] mb-[120px]  ">
      <hr className="w-[91.6666667%] mx-auto h-[2px] bg-[#282828] mb-2" />
      <h3 className="w-[91.6666667%]  mx-auto text-[20px] font-semibold ">
        سیاست
      </h3>
      <div className="w-[91.6666667%]  max-sm:mx-auto pt-[8px] h-fit flex flex-row justify-between items-start max-sm:flex-col max-sm:items-center mx-auto">
        <RightPolitics />
        <LeftPolitics />
      </div>
    </div>
  );
};
export default Politics;
