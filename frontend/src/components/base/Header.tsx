import React, { useState, useRef, useEffect } from "react";
import type { NextComponentType } from "next";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faRankingStar,
  faFireFlameCurved,
  faMagnifyingGlass,
  faUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import Lottie, { LottieRef } from "lottie-react";
import { styled } from "../../styles/stitches.config";
import * as themeLottie from "../../lotties/theme.json";
import * as dynamicNavItemLottie from "../../lotties/dynamicNavItem.json";

const nav = [
  {
    id: 0,
    path: "/",
    icon: faRankingStar,
  },
  {
    id: 1,
    path: "/trend",
    icon: faFireFlameCurved,
  },
  {
    id: 2,
    path: "/search",
    icon: faMagnifyingGlass,
  },
  {
    id: 3,
    path: "/auth",
    icon: faUser,
  },
  {
    id: 4,
    path: "/setting",
    icon: faGear,
  },
];

const Header: NextComponentType = () => {
  const themeLottieRef: LottieRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const [navIndex, setNavIndext] = useState(0);

  const onThemeHandler = () => {
    if (theme === "dark") {
      themeLottieRef.current?.playSegments([94, 0], true);
      setTheme("light");
    } else {
      themeLottieRef.current?.playSegments([64, 134], true);
      setTheme("dark");
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      themeLottieRef.current?.goToAndPlay(134, true);
    }
  }, []);

  themeLottieRef.current?.setSpeed(2);

  return (
    <HeaderWrap>
      <HeaderInner>
        <HeaderDynamicSwitch>
          <HeaderDynamicSwitchInner>
            <HeaderDynamicSwitchNavWrap>
              <Lottie
                animationData={dynamicNavItemLottie}
                renderer="svg"
                loop={true}
                autoplay={true}
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid meet",
                }}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
              />
              <HeaderDynamicSwitchNav>
                {nav.map((item, index) => {
                  const { id, icon } = item;

                  return (
                    <HeaderDynamicSwitchNavItem
                      key={id}
                      isActive={index === navIndex}
                    >
                      <FontAwesomeIcon icon={icon} />
                    </HeaderDynamicSwitchNavItem>
                  );
                })}
              </HeaderDynamicSwitchNav>
            </HeaderDynamicSwitchNavWrap>
            <HeaderDynamicSwitchPrev>
              <FontAwesomeIcon icon={faAngleLeft} />
            </HeaderDynamicSwitchPrev>
          </HeaderDynamicSwitchInner>
        </HeaderDynamicSwitch>
        <HeaderDynamicIsland>
          <HeaderDynamicIslandNavWrap>
            <HeaderNavDynamicIslandNavList>
              {nav.map((item, index) => {
                const { id, path, icon } = item;

                return (
                  <HeaderNavDynamicIslandNavItem
                    key={id}
                    order={
                      index === navIndex
                        ? "active"
                        : navIndex > index
                        ? index
                        : index - 1
                    }
                  >
                    <HeaderNavDynamicIslandNavItemButton
                      onClick={() => setNavIndext(index)}
                    >
                      <Link href={path}>
                        <FontAwesomeIcon icon={icon} />
                      </Link>
                    </HeaderNavDynamicIslandNavItemButton>
                  </HeaderNavDynamicIslandNavItem>
                );
              })}
            </HeaderNavDynamicIslandNavList>
          </HeaderDynamicIslandNavWrap>
        </HeaderDynamicIsland>
        <HeaderThemeButton onClick={onThemeHandler}>
          <Lottie
            lottieRef={themeLottieRef}
            animationData={themeLottie}
            renderer="svg"
            loop={false}
            autoplay={false}
            rendererSettings={{
              preserveAspectRatio: "xMidYMid meet",
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "230%",
              height: "230%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </HeaderThemeButton>
      </HeaderInner>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled("header", {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  padding: 16,
});

const HeaderInner = styled("div", {
  display: "flex",
  columnGap: 8,
  justifyContent: "space-between",
  position: "relative",
  height: 48,
  "@sm": {
    height: 60,
  },
});

const HeaderDynamicSwitch = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 48,
  height: "100%",
  padding: 4,
  borderRadius: "50%",
  backgroundColor: "$theme-inverse",
  "@sm": {
    width: 60,
  },
});

const HeaderDynamicSwitchInner = styled("div", {
  flex: 1,
  position: "relative",
  overflow: "hidden",
  borderRadius: "50%",
  height: "100%",
});

const HeaderDynamicSwitchNavWrap = styled("div", {
  display: "flex",
  overflow: "hidden",
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 10,
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  backgroundColor: "$theme-inverse",
});

const HeaderDynamicSwitchNav = styled("ul", {
  flex: 1,
  position: "relative",
  height: "100%",
});

const HeaderDynamicSwitchNavItem = styled("li", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  right: "-100%",
  zIndex: 0,
  width: "100%",
  height: "100%",
  transition: "right 400ms cubic-bezier(0.4, 0, 0.2, 1)",
  variants: {
    isActive: {
      true: {
        right: 0,
        zIndex: 10,
      },
    },
  },
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

const HeaderDynamicSwitchPrev = styled("button", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  "& svg": {
    color: "$primary-main",
    fontSize: 16,
  },
  "@sm": {
    "& svg": {
      fontSize: 20,
    },
  },
});

const HeaderThemeButton = styled("button", {
  position: "relative",
  overflow: "hidden",
  width: 48,
  height: "100%",
  "@sm": {
    width: 60,
  },
});

const HeaderDynamicIslandNavWrap = styled("nav", {
  position: "relative",
  borderRadius: 32,
  backgroundColor: "$theme-inverse",
  padding: 4,
});

const HeaderDynamicIsland = styled("div", {
  display: "flex",
  justifyContent: "center",
  flex: 1,
});

const HeaderNavDynamicIslandNavList = styled("ul", {
  overflow: "hidden",
  position: "relative",
  width: 172,
  height: "100%",
  borderRadius: 20,
  "@sm": {
    width: 220,
    borderRadius: 26,
  },
});

const HeaderNavDynamicIslandNavItem = styled("li", {
  position: "absolute",
  top: 0,
  zIndex: 0,
  width: "calc(25% - 3px)",
  height: "100%",
  borderRadius: "50%",
  backgroundColor: "$neutral-inverse",
  transition: "left 400ms cubic-bezier(0.4, 0, 0.2, 1)",
  variants: {
    order: {
      active: {
        left: "-25%",
        zIndex: 10,
      },
      "0": {
        left: 0,
      },
      "1": {
        left: "calc(25% + 1px)",
      },
      "2": {
        left: "calc(50% + 2px)",
      },
      "3": {
        left: "calc(75% + 3px)",
      },
    },
  },
});

const HeaderNavDynamicIslandNavItemButton = styled("button", {
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
