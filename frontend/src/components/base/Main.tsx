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
  paddingBottom: 80,
  "@sm": {
    paddingBottom: 92,
  },
});
