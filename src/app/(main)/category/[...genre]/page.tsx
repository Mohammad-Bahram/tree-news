"use client";
import React from "react";
import Sports from "../../sports/page";
import { usePathname, useRouter } from "next/navigation";
const Genre = () => {
  const pathName = usePathname();

  const category = pathName.slice(10);

  const router = useRouter();
  if (category === "%D8%B5%D9%81%D8%AD%D9%87%20%D8%A7%D8%B5%D9%84%DB%8C") {
    router.push("/");
  }
  return (
    <div>
      {category !== "%D8%B5%D9%81%D8%AD%D9%87%20%D8%A7%D8%B5%D9%84%DB%8C" && (
        <Sports />
      )}
    </div>
  );
};

export default Genre;
