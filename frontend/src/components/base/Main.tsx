import React from "react";
import type { NextComponentType } from "next";
import { styled } from "../../styles/stitches.config";

interface Props {
  child: React.ReactNode;
}

const Main: NextComponentType<Props> = ({ child }) => {
  return <MainWrap>{child}</MainWrap>;
};

export default Main;

const MainWrap = styled("main", {
  backgroundColor: "orange",
  "@sm": {
    backgroundColor: "purple",
  },
});
