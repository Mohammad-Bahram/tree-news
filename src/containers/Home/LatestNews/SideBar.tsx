import FirstSidebar from "./FirstSidebar";
import SecondSidebar from "./SecondSidebar";

const SideBar = () => {
  return (
    <div className="w-[25.2%] h-fit max-md:w-[85%]">
      <FirstSidebar />
      <SecondSidebar />
    </div>
  );
};
export default SideBar;
