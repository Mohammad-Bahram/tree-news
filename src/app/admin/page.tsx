
import dynamic from "next/dynamic";
import React from "react";
const LazyLogin = dynamic(() => import("@/src/components/login/Login"), {
  ssr: false,
});
const Page = () => {
  return <LazyLogin />;
};

export default Page;
