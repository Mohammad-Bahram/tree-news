import Col_1 from "./Col_1";
import Col_2 from "./Col_2";
import SideBar from "./SideBar";
const LatestNews = () => {
  return (
    <div className="w-full h-fit pt-[23px]">
      <div className="w-[91.6666667%] pb-[70px] h-fit mx-auto flex md:flex-row md:justify-between  flex-wrap max-md:flex-col max-md:items-center max-md:justify-start gap-3 ">
        <Col_1 />
        <Col_2 />
        <SideBar />
      </div>
    </div>
  );
};
export default LatestNews;
