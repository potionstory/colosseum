import React from "react";
import { useSpring, animated, easings } from "react-spring";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styles/stitches.config";

type DynamicSwitchNavItemType = {
  icon: IconProp;
  isActive: boolean;
};

const DynamicSwitchNavItem: React.FC<DynamicSwitchNavItemType> = ({
  icon,
  isActive,
}) => {
  const navItemAnimated = useSpring({
    left: isActive ? "0%" : "100%",
    config: {
      duration: 500,
      easing: easings.easeInOutCubic,
    },
  });

  return (
    <DynamicSwitchNavItemWrap style={navItemAnimated}>
      <FontAwesomeIcon icon={icon} />
    </DynamicSwitchNavItemWrap>
  );
};

export default DynamicSwitchNavItem;

const DynamicSwitchNavItemWrap = styled(animated.li, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  left: "100%",
  zIndex: 0,
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  backgroundColor: "$neutral-inverse",
  transform: "none",
  "& svg": {
    zIndex: 10,
    color: "$theme",
    fontSize: 16,
  },
  "@sm": {
    "& svg": {
      fontSize: 20,
    },
  },
});
