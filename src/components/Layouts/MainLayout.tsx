"use client"
import React from "react";
import Footer from "./Footer/Footer";
import MainBanner from "./MainBanner";
import { usePathname  } from "next/navigation";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: LayoutProps) => {
  const currentPath = usePathname();
  return (
    <div className="w-full h-full">
      <div className="border-b border-[#c2c2c2]">
        <Header />
      </div>
      {!isHiddenBanner(currentPath) && <MainBanner />}
      <main className="w-full h-full">{children}</main>
      <Footer />
    </div>
  );
};

function isHiddenBanner(pathname: string) {
  return pathname.includes('/products/');
}
export default MainLayout;
