import Image from "next/image";
import Link from "next/link";
import React from "react";

const SidebarAdminMobile = () => {
  const sidebar: {
    id: number;
    title: string;
    direction: string;
    logo: string;
  }[] = [
    {
      id: 1,
      title: "لیست کاربران",
      direction: "/admin/dashboard/users",
      logo: "/images/admin/user.png",
    },
    {
      id: 2,
      title: "دسته بندی ها",
      direction: "/admin/dashboard/categories",
      logo: "/images/admin/category-2.png",
    },
    {
      id: 3,
      title: "اخبار زیرنویس",
      direction: "/admin/dashboard/subtitle",
      logo: "/images/admin/subtitle.png",
    },
    {
      id: 4,
      title: "تبلیغات",
      direction: "/admin/dashboard/advertisment",
      logo: "/images/admin/ad.png",
    },
    {
      id: 5,
      title: "تنظیمات",
      direction: "/admin/dashboard/setting",
      logo: "/images/admin/setting-2.png",
    },
    {
      id: 6,
      title: "آمار بازدید",
      direction: "/admin/dashboard/views",
      logo: "/images/admin/status-up.png",
    },
  ];
  return (
    <div className="h-[90px] flex flex-row items-center  md:hidden  self-start">
      <details className=" dropdown ">
        <summary className="btn m-1 hover:text-[#EB5757] transition-all ease-linear duration-150 bg-white">
          داشبورد
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          {sidebar.map((elem) => {
            return (
              <li
                className="hover:text-[#EB5757] transition-all ease-linear duration-150"
                key={elem.id}
              >
                <Link href={elem.direction}>
                  <Image src={elem.logo} width={20} height={20} alt="logo" />
                  {elem.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </details>
    </div>
  );
};

export default SidebarAdminMobile;
