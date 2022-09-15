import React from "react";
import type { NextPage } from "next";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col px-4 bg-theme">
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
      </main>
    </>
  );
};

export default Layout;
