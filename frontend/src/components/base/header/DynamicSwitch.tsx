import React from "react";
import { useSpring, animated, easings } from "react-spring";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import useHeaderStore from "store/header";
import DynamicSwitchNavItem from "components/base/header/DynamicSwitchNavItem";
import { styled } from "styles/stitches.config";

type NavItem = {
  id: number;
  path: string;
  icon: IconProp;
};

type DynamicSwitchType = {
  navList: NavItem[];
  navIndex: number;
};

const DynamicSwitch: React.FC<DynamicSwitchType> = ({ navList, navIndex }) => {
  const { isDynamic, setIsDynamic } = useHeaderStore((state) => state);

  const switchNavAnimated = useSpring({
    left: isDynamic ? "100%" : "0%",
    config: {
      duration: 400,
      easing: easings.easeInOutCubic,
    },
  });

  const switchPrevAnimated = useSpring({
    left: isDynamic ? "0%" : "100%",
    config: {
      duration: 400,
      easing: easings.easeInOutCubic,
    },
  });

  return (
    <DynamicSwitchWarp>
      <DynamicSwitchInner>
        <DynamicSwitchNavWrap style={switchNavAnimated}>
          <DynamicSwitchNav>
            {navList.map((item, index) => {
              const { id, icon } = item;

              return (
                <DynamicSwitchNavItem
                  key={id}
                  icon={icon}
                  isActive={index === navIndex}
                />
              );
            })}
          </DynamicSwitchNav>
        </DynamicSwitchNavWrap>
        <DynamicSwitchPrev
          style={switchPrevAnimated}
          onClick={() => setIsDynamic(false)}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </DynamicSwitchPrev>
      </DynamicSwitchInner>
    </DynamicSwitchWarp>
  );
};

export default DynamicSwitch;

const DynamicSwitchWarp = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 48,
  height: "100%",
  padding: 4,
  borderRadius: "50%",
  backgroundColor: "$primary-main",
  "@sm": {
    width: 60,
  },
});

const DynamicSwitchInner = styled("div", {
  flex: 1,
  position: "relative",
  overflow: "hidden",
  borderRadius: "50%",
  height: "100%",
});

const DynamicSwitchNavWrap = styled(animated.div, {
  display: "flex",
  overflow: "hidden",
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 10,
  width: "100%",
  height: "100%",
});

const DynamicSwitchNav = styled("ul", {
  flex: 1,
  position: "relative",
  height: "100%",
});

const DynamicSwitchPrev = styled(animated.button, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  backgroundColor: "$neutral-inverse",
  "& svg": {
    color: "$theme",
    fontSize: 16,
  },
  "@sm": {
    "& svg": {
      fontSize: 20,
    },
  },
});
