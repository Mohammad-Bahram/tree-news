import Link from "next/link";

const HealthCategory = () => {
  return (
    <div className=" w-fit h-fit flex flex-col items-start gap-y-[5px] ">
      <h3 className="mb-[9px]">سلامت </h3>
      <div className="flex flex-row justify-between items-start">
        <div className=" w-fit h-fit flex flex-col items-start gap-y-[5px] ">
          {" "}
          <Link href={"/"}>
            <span> سالمندی</span>
          </Link>
          <Link href={"/"}>
            <span> بیماری ها</span>
          </Link>
          <Link href={"/"}>
            <span> سلامت زنان</span>
          </Link>
          <Link href={"/"}>
            <span> صنعت</span>
          </Link>
          <Link href={"/"}>
            <span> اصناف پزشکی </span>
          </Link>
          <Link href={"/"}>
            <span> تغذیه و تناسب اندام</span>
          </Link>
        </div>
        <div className=" w-fit h-fit flex flex-col items-end gap-y-[5px] ">
          {" "}
          <Link href={"/"}>
            <span> سلامت کودک و خانواده</span>
          </Link>
          <Link href={"/"}>
            <span>دارو و تجهیزات پزشکی</span>
          </Link>
          <Link href={"/"}>
            <span>سلامت روان</span>
          </Link>
          <Link href={"/"}>
            <span> بازار کار</span>
          </Link>
          <Link href={"/"}>
            <span> مد و زیبایی</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HealthCategory;
