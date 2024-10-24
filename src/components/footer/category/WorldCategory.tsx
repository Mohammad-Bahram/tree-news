import Link from "next/link";

const WorldCategory = () => {
  return (
    <div className=" w-fit h-fit flex flex-col items-start gap-y-[5px] ">
      <h3 className="mb-[9px]">جهان</h3>
      <Link href={"/"}>
        <span> آمریکا</span>
      </Link>
      <Link href={"/"}>
        <span> اروپا</span>
      </Link>
      <Link href={"/"}>
        <span> روسیه</span>
      </Link>
      <Link href={"/"}>
        <span> چین</span>
      </Link>
      <Link href={"/"}>
        <span> آفریقا</span>
      </Link>
      <Link href={"/"}>
        <span> خاورمیانه</span>
      </Link>
    </div>
  );
};
export default WorldCategory;
