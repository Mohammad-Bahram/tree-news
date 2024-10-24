import Link from "next/link";

const EconomyCategory = () => {
  return (
    <div className=" w-fit h-fit flex flex-col items-start gap-y-[5px] ">
      <h3 className="mb-[9px]">اقتصاد</h3>
      <div className="flex flex-row justify-between items-start">
        <div className=" w-fit h-fit flex flex-col items-start gap-y-[5px] ">
          {" "}
          <Link href={"/"}>
            <span> بازرگانی</span>
          </Link>
          <Link href={"/"}>
            <span> مسکن</span>
          </Link>
          <Link href={"/"}>
            <span> کشاورزی</span>
          </Link>
          <Link href={"/"}>
            <span> صنعت</span>
          </Link>
          <Link href={"/"}>
            <span> اقتصاد کلان</span>
          </Link>
          <Link href={"/"}>
            <span> اقتصاد سیاسی</span>
          </Link>
        </div>
        <div className=" w-fit h-fit flex flex-col items-end gap-y-[5px] ">
          {" "}
          <Link href={"/"}>
            <span> راهنمای خرید</span>
          </Link>
          <Link href={"/"}>
            <span> کسب و کار</span>
          </Link>
          <Link href={"/"}>
            <span> بازارمالی</span>
          </Link>
          <Link href={"/"}>
            <span> بازار کار</span>
          </Link>
          <Link href={"/"}>
            <span> انرژی</span>
          </Link>
          <Link href={"/"}>
            <span> جهان</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default EconomyCategory;
