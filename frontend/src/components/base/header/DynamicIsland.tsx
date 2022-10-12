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
      <DynamicIslandNavWrap style={navAnimated}>
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
      {page === "/" && (
        <DynamicIslandColosseumWrap style={colosseumAnimated}>
          Colosseum
        </DynamicIslandColosseumWrap>
      )}
      {page === "/trend" && (
        <DynamicIslandColosseumWrap style={colosseumAnimated}>
          Trend
        </DynamicIslandColosseumWrap>
      )}
      {page === "/search" && (
        <DynamicIslandColosseumWrap style={colosseumAnimated}>
          Search
        </DynamicIslandColosseumWrap>
      )}
      {page === "/auth" && (
        <DynamicIslandColosseumWrap style={colosseumAnimated}>
          Auth
        </DynamicIslandColosseumWrap>
      )}
      {page === "/setting" && (
        <DynamicIslandColosseumWrap style={colosseumAnimated}>
          Setting
        </DynamicIslandColosseumWrap>
      )}
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
  height: "100%",
  borderRadius: 24,
  transform: "translate(-50%, -50%)",
  "@sm": {
    borderRadius: 32,
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

const DynamicIslandColosseumWrap = styled(animated.div, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "100%",
  borderRadius: 24,
  transform: "translate(-50%, -50%)",
  backgroundColor: "$theme-inverse",
  fontSize: "1rem",
  fontWeight: 700,
  color: "$theme",
  "@sm": {
    borderRadius: 32,
  },
});
