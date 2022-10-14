import React from "react";
import type { NextPage } from "next";
import { styled } from "../../styles/stitches.config";

interface Props {
  children: React.ReactNode;
}

const Main: NextPage<Props> = ({ children }) => {
  return <MainWrap>{children}</MainWrap>;
};

export default Main;

const MainWrap = styled("main", {
  padding: "16px 16px 80px",
  "@sm": {
    paddingBottom: 92,
  },
});
