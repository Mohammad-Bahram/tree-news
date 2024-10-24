import Link from "next/link";

const SocietyCategory = () => {
  return (
    <div className=" w-fit h-fit flex flex-col items-start gap-y-[5px] ">
      <h3 className="mb-[9px]">جامعه </h3>
      <div className="flex flex-row justify-between items-start">
        <div className=" w-fit h-fit flex flex-col items-start gap-y-[5px] ">
          {" "}
          <Link href={"/"}>
            <span> آموزش</span>
          </Link>
          <Link href={"/"}>
            <span> شهری</span>
          </Link>
          <Link href={"/"}>
            <span> خانواده</span>
          </Link>
          <Link href={"/"}>
            <span> حوادث</span>
          </Link>
          <Link href={"/"}>
            <span> پلیس </span>
          </Link>
          <Link href={"/"}>
            <span> سبک زندگی</span>
          </Link>
        </div>
        <div className=" w-fit h-fit flex flex-col items-end gap-y-[5px] ">
          {" "}
          <Link href={"/"}>
            <span> مشکلات مردم</span>
          </Link>
          <Link href={"/"}>
            <span>محیط زیست</span>
          </Link>
          <Link href={"/"}>
            <span>سلامت روان</span>
          </Link>
          <Link href={"/"}>
            <span> آسیب ها</span>
          </Link>
          <Link href={"/"}>
            <span> سرگرمی</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SocietyCategory;
