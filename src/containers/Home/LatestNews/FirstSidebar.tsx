import { useState } from "react";
import "./hover.css";
import Popular from "./SidebarComponents/Popular";
import Contriversial from "./SidebarComponents/Contriversial";
import Chosen from "./SidebarComponents/Chosen";
const FirstSidebar = () => {
  const [state, setState] = useState<{
    popular: boolean;
    contriversial: boolean;
    chosen: boolean;
  }>({
    popular: true,
    chosen: false,
    contriversial: false,
  });
  return (
    <div className=" w-full h-[400px] p-[8px] bg-[#F6F6F6] mb-[72px] rounded-[5px]  ">
      <div className="w-full py-1 h-[35px] bg-[#500C0B] rounded-[4px] text-white flex flex-row justify-around lg:text-[14px] md:text-[12px]   ">
        <button
          onClick={() => {
            setState({
              popular: true,
              chosen: false,
              contriversial: false,
            });
          }}
          className="underline-from-center"
        >
          پر‌بازدید
        </button>
        <button
          onClick={() => {
            setState({ popular: false, chosen: false, contriversial: true });
          }}
          className="underline-from-center"
        >
          پر‌بحث
        </button>
        <button
          onClick={() => {
            setState({ popular: false, chosen: true, contriversial: false });
          }}
          className="underline-from-center"
        >
          برگزیده
        </button>
      </div>
      {state.popular && <Popular />}
      {state.contriversial && <Contriversial />}
      {state.chosen && <Chosen />}
    </div>
  );
};
export default FirstSidebar;
