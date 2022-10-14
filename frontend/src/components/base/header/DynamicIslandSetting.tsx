import React from "react";
import { styled } from "styles/stitches.config";

const DynamicIslandSetting: React.FC = () => {
  return (
    <DynamicIslandSettingWrap>DynamicIslandSetting</DynamicIslandSettingWrap>
  );
};

export default DynamicIslandSetting;

const DynamicIslandSettingWrap = styled("div", {
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
