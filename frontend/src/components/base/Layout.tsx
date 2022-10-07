import React from "react";
import type { NextPage } from "next";
import Header from "./Header";
import Main from "./Main";

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Main child={children} />
    </>
  );
};

export default Layout;
