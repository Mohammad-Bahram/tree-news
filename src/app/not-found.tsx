import Image from "next/image";
import React from "react";

const Notfound = () => {
  return (
    <div className="w-full h-[100vh] flex flex-row items-center bg-[#FE3333]">
      <Image
        src={"/images/404.png"}
        width={1024}
        height={512}
        alt="404"
        className="mx-auto object-cover"
      />
    </div>
  );
};

export default Notfound;
