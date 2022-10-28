import React from "react";
import type { NextPage } from "next";
import DynamicBar from "./dynamicBar";
import Main from "./Main";

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Main>{children}</Main>
      <DynamicBar />
    </>
  );
};

export default Layout;
