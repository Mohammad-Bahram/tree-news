import Link from "next/link";

const ITCategory = () => {
  return (
    <div className=" w-fit h-fit flex flex-col items-start gap-y-[5px] ">
      <h3 className="mb-[9px]">دانش و فن‌آوری </h3>
      <div className="flex flex-row justify-between items-start">
        <div className=" w-fit h-fit flex flex-col items-start gap-y-[5px] ">
          {" "}
          <Link href={"/"}>
            <span> بازی</span>
          </Link>
          <Link href={"/"}>
            <span> پزشکی</span>
          </Link>
          <Link href={"/"}>
            <span> شبه علم</span>
          </Link>
          <Link href={"/"}>
            <span> اینترنت</span>
          </Link>
          <Link href={"/"}>
            <span> استارت آپ </span>
          </Link>
          <Link href={"/"}>
            <span> دانش های بنیادی</span>
          </Link>
        </div>
        <div className=" w-fit h-fit flex flex-col items-end gap-y-[5px] ">
          {" "}
          <Link href={"/"}>
            <span> جنگ افزار</span>
          </Link>
          <Link href={"/"}>
            <span>فناوری</span>
          </Link>
          <Link href={"/"}>
            <span>طبیعت</span>
          </Link>
          <Link href={"/"}>
            <span> خودرو</span>
          </Link>
          <Link href={"/"}>
            <span> نجوم</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ITCategory;
