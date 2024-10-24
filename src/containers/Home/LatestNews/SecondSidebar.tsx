import LastNews from "./SidebarComponents/LastNews";

const SecondSidebar = () => {
  return (
    <div className="w-full h-[400px] p-[8px] bg-[#F6F6F6]  rounded-[5px]">
      <div className=" w-full  h-[35px] bg-[#500C0B] rounded-[4px] text-white  text-[14px] leading-[35px]">
        <h4 className="text-center w-full h-full">آخرین اخبار</h4>
        <LastNews />
      </div>
    </div>
  );
};
export default SecondSidebar;
