import React from "react";
import { useRouter } from "next/router";
import {
  useSpring,
  useSpringRef,
  useChain,
  animated,
  easings,
} from "react-spring";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useHeaderStore from "store/header";
import DynamicIslandColosseum from "./DynamicIslandColosseum";
import DynamicIslandTrend from "./DynamicIslandTrend";
import DynamicIslandSearch from "./DynamicIslandSearch";
import DynamicIslandAuth from "./DynamicIslandAuth";
import DynamicIslandSetting from "./DynamicIslandSetting";
import { styled } from "styles/stitches.config";

type NavItem = {
  id: number;
  path: string;
  icon: IconProp;
};

type DynamicIslandType = {
  navList: NavItem[];
  navIndex: number;
  onNavIndexChange: (index: number) => void;
};

const DynamicIsland: React.FC<DynamicIslandType> = ({
  navList,
  navIndex,
  onNavIndexChange,
}) => {
  const { page, isDynamic, setPage } = useHeaderStore((state) => state);
  const router = useRouter();

  const navRouteHandle = (index: number, path: string) => {
    onNavIndexChange(index);
    router.push(path);
    setPage(path);
  };

  const navAnimatedRef = useSpringRef();
  const colosseumAnimatedRef = useSpringRef();

  const navAnimated = useSpring({
    width: isDynamic ? "0%" : "100%",
    config: {
      duration: 400,
      easing: easings.easeInOutCubic,
    },
    ref: navAnimatedRef,
  });

  const colosseumAnimated = useSpring({
    width: isDynamic ? "100%" : "0%",
    config: {
      duration: 400,
      easing: easings.easeInOutCubic,
    },
    ref: colosseumAnimatedRef,
  });

  useChain(
    isDynamic
      ? [navAnimatedRef, colosseumAnimatedRef]
      : [colosseumAnimatedRef, navAnimatedRef],
    [0, 0.2]
  );

  return (
    <DynamicIslandWrap>
      <DynamicIslandNavWrap style={navAnimated} isDynamic={isDynamic}>
        <DynamicIslandNavList>
          {navList.map((item, index) => {
            const { id, path, icon } = item;

            return (
              <DynamicIslandNavItem
                key={id}
                order={
                  index === navIndex
                    ? "active"
                    : navIndex > index
                    ? index
                    : index - 1
                }
              >
                <DynamicIslandNavItemButton
                  onClick={() => navRouteHandle(index, path)}
                >
                  <FontAwesomeIcon icon={icon} />
                </DynamicIslandNavItemButton>
              </DynamicIslandNavItem>
            );
          })}
        </DynamicIslandNavList>
      </DynamicIslandNavWrap>
      <DynamicIslandCenterWrap style={colosseumAnimated} isDynamic={isDynamic}>
        <DynamicIslandCenterInner>
          {page === "/" && <DynamicIslandColosseum />}
          {page === "/trend" && <DynamicIslandTrend />}
          {page === "/search" && <DynamicIslandSearch />}
          {page === "/auth" && <DynamicIslandAuth />}
          {page === "/setting" && <DynamicIslandSetting />}
        </DynamicIslandCenterInner>
      </DynamicIslandCenterWrap>
    </DynamicIslandWrap>
  );
};

export default DynamicIsland;

const DynamicIslandWrap = styled("div", {
  display: "flex",
  justifyContent: "center",
  flex: 1,
  position: "relative",
});

const DynamicIslandNavWrap = styled(animated.nav, {
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  position: "absolute",
  top: "50%",
  left: "50%",
  zIndex: 10,
  height: "100%",
  borderRadius: 24,
  transform: "translate(-50%, -50%)",
  "@sm": {
    borderRadius: 30,
  },
  variants: {
    isDynamic: {
      true: {
        zIndex: 0,
      },
    },
  },
});

const DynamicIslandNavList = styled("ul", {
  overflow: "hidden",
  position: "relative",
  padding: 4,
  width: 180,
  height: "100%",
  borderRadius: 24,
  backgroundColor: "$theme-inverse",
  "@sm": {
    width: 228,
    borderRadius: 30,
  },
});

const DynamicIslandNavItem = styled("li", {
  position: "absolute",
  top: 4,
  zIndex: 0,
  width: "calc(25% - 5px)",
  height: "calc(100% - 8px)",
  borderRadius: "50%",
  backgroundColor: "$neutral-inverse",
  transition: "left 400ms cubic-bezier(0.4, 0, 0.2, 1)",
  variants: {
    order: {
      active: {
        left: "calc(-25% + 5px)",
        zIndex: 10,
      },
      "0": {
        left: 4,
      },
      "1": {
        left: "calc(25% + 3px)",
      },
      "2": {
        left: "calc(50% + 2px)",
      },
      "3": {
        left: "calc(75% + 1px)",
      },
    },
  },
});

const DynamicIslandNavItemButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
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

const DynamicIslandCenterWrap = styled(animated.div, {
  display: "flex",
  overflow: "hidden",
  position: "absolute",
  bottom: "0%",
  left: "50%",
  zIndex: 0,
  height: "100%",
  transform: "translateX(-50%)",
  variants: {
    isDynamic: {
      true: {
        zIndex: 10,
      },
    },
  },
});

const DynamicIslandCenterInner = styled("div", {
  display: "flex",
  flex: 1,
  overflow: "hidden",
  padding: 4,
  borderRadius: 24,
  backgroundColor: "$theme-inverse",
  "@sm": {
    borderRadius: 32,
  },
});
