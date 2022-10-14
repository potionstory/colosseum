import React from "react";
import { styled } from "styles/stitches.config";

const DynamicIslandTrend: React.FC = () => {
  return <DynamicIslandTrendWrap>DynamicIslandTrend</DynamicIslandTrendWrap>;
};

export default DynamicIslandTrend;

const DynamicIslandTrendWrap = styled("div", {
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: 24,
  backgroundColor: "$theme-inverse",
  fontSize: "1rem",
  fontWeight: 700,
  color: "$theme",
  "@sm": {
    borderRadius: 32,
  },
  variants: {
    isDynamic: {
      true: {
        zIndex: 10,
      },
    },
  },
});
