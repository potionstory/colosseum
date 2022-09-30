import React from "react";
import type { NextPage } from "next";
import { styled } from "@stitches/react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Main = styled("main", {
  padding: "0 1rem",
});

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
      </Main>
    </>
  );
};

export default Layout;
