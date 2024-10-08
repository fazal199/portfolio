import Navbar from "@/components/Navbar";
import React from "react";

const BaseLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return <>
   <Navbar/>
  <main>{children}</main>
  </>;
};

export default BaseLayout;
