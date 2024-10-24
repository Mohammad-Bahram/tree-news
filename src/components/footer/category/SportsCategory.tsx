import Link from "next/link";

const SportsCategory = () => {
  return (
    <div className=" w-fit h-fit flex flex-col items-start gap-y-[5px] ">
      <h3 className="mb-[9px]">ورزش</h3>
      <div className="flex flex-row justify-between items-start">
        <div className=" w-fit h-fit flex flex-col items-start gap-y-[5px] ">
          {" "}
          <Link href={"/"}>
            <span> کشتی</span>
          </Link>
          <Link href={"/"}>
            <span> وزنه برداری</span>
          </Link>
          <Link href={"/"}>
            <span> فوتبال ملی</span>
          </Link>
          <Link href={"/"}>
            <span> فوتبال جهان</span>
          </Link>
          <Link href={"/"}>
            <span> مدیریت ورزش </span>
          </Link>
          <Link href={"/"}>
            <span> المپیک و پاراالمپیک</span>
          </Link>
        </div>
        <div className=" w-fit h-fit flex flex-col items-end gap-y-[5px] ">
          {" "}
          <Link href={"/"}>
            <span> ورزش های رزمی </span>
          </Link>
          <Link href={"/"}>
            <span> سایر ورزش ها </span>
          </Link>
          <Link href={"/"}>
            <span> بسکتبال</span>
          </Link>
          <Link href={"/"}>
            <span> لیگ برتر</span>
          </Link>
          <Link href={"/"}>
            <span> والیبال</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SportsCategory;
