import React from "react";
import { styled } from "styles/stitches.config";

const DynamicIslandColosseum: React.FC = () => {
  return (
    <DynamicIslandColosseumWrap>
      DynamicIslandColosseum
    </DynamicIslandColosseumWrap>
  );
};

export default DynamicIslandColosseum;

const DynamicIslandColosseumWrap = styled("div", {
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 20,
  backgroundColor: "$neutral-inverse",
  fontSize: "1rem",
  fontWeight: 700,
  color: "$theme",
  "@sm": {
    borderRadius: 26,
  },
});
