import Left from "./Left";
import Right from "./Right";

const World = () => {
  return (
    <div className="w-full h-fit py-[72px]  ">
      <hr className="w-[91.6666667%] mx-auto h-[2px] bg-[#282828] mb-2" />
      <h3 className="w-[91.6666667%]  mx-auto text-[20px] font-semibold ">
        جهان
      </h3>
      <div className="w-[91.6666667%]  max-sm:mx-auto pt-[8px] h-fit flex flex-row justify-between items-start max-sm:flex-col max-sm:items-center mx-auto">
        <Right />
        <Left />
      </div>
    </div>
  );
};
export default World;
