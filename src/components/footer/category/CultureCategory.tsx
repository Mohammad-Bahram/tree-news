import Link from "next/link";

const CultureCategory = () => {
  return (
    <div className=" w-fit h-fit flex flex-col items-start gap-y-[5px] ">
      <h3 className="mb-[9px]">فرهنگ</h3>
      <div className="flex flex-row justify-between items-start">
        <div className=" w-fit h-fit flex flex-col items-start gap-y-[5px] ">
          {" "}
          <Link href={"/"}>
            <span> تئاتر</span>
          </Link>
          <Link href={"/"}>
            <span> سینما</span>
          </Link>
          <Link href={"/"}>
            <span>تلوزیون </span>
          </Link>
          <Link href={"/"}>
            <span>ادبیات</span>
          </Link>
          <Link href={"/"}>
            <span> تجسمی </span>
          </Link>
          <Link href={"/"}>
            <span> مدیریت فرهنگی</span>
          </Link>
        </div>
        <div className=" w-fit h-fit flex flex-col items-end gap-y-[5px] ">
          {" "}
          <Link href={"/"}>
            <span> طنز و کاریکاتور </span>
          </Link>
          <Link href={"/"}>
            <span> دفاع مقدس </span>
          </Link>
          <Link href={"/"}>
            <span> موسیقی</span>
          </Link>
          <Link href={"/"}>
            <span> رسانه</span>
          </Link>
          <Link href={"/"}>
            <span> کتاب</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CultureCategory;
