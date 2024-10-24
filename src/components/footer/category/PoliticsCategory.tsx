import Link from "next/link";

const PoliticsCategory = () => {
  return (
    <div className=" w-fit h-fit flex flex-col items-start gap-y-[5px] ">
      <h3 className="mb-[9px]">سیاست</h3>
      <Link href={"/"}>
        <span> رهبری</span>
      </Link>
      <Link href={"/"}>
        <span> دولت</span>
      </Link>
      <Link href={"/"}>
        <span> مجلس</span>
      </Link>
      <Link href={"/"}>
        <span> انتخابات</span>
      </Link>
      <Link href={"/"}>
        <span> احزاب</span>
      </Link>
      <Link href={"/"}>
        <span> نظامی</span>
      </Link>
    </div>
  );
};
export default PoliticsCategory;
