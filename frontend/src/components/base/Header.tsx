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
        <HeaderDynamicButton>
          <FontAwesomeIcon icon={faAngleLeft} />
        </HeaderDynamicButton>
        <HeaderDynamicIsland>
          <HeaderNavWrap>
            <HeaderNavList>
              {nav.map((item, index) => {
                const { id, path, icon } = item;

                return (
                  <HeaderNavItem
                    key={id}
                    order={
                      index === navIndex
                        ? "active"
                        : navIndex > index
                        ? index
                        : index - 1
                    }
                  >
                    <HeaderNavItemButton onClick={() => setNavIndext(index)}>
                      <Link href={path}>
                        <FontAwesomeIcon icon={icon} />
                      </Link>
                    </HeaderNavItemButton>
                  </HeaderNavItem>
                );
              })}
            </HeaderNavList>
          </HeaderNavWrap>
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
  padding: 8,
});

const HeaderInner = styled("div", {
  display: "flex",
  columnGap: 8,
  justifyContent: "space-between",
  position: "relative",
  height: 48,
  "@sm": {
    height: 64,
  },
});

const HeaderDynamicButton = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  width: 48,
  height: "100%",
  backgroundColor: "$theme-inverse",
  "& svg": {
    color: "$primary-main",
    fontSize: 20,
  },
  "@sm": {
    width: 64,
    "& svg": {
      fontSize: 28,
    },
  },
});

const HeaderThemeButton = styled("button", {
  position: "relative",
  overflow: "hidden",
  width: 48,
  height: "100%",
  "@sm": {
    width: 64,
  },
});

const HeaderNavWrap = styled("nav", {
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

const HeaderNavList = styled("ul", {
  overflow: "hidden",
  position: "relative",
  width: 160,
  height: "100%",
  borderRadius: 20,
  "@sm": {
    width: 224,
    borderRadius: 28,
  },
});

const HeaderNavItem = styled("li", {
  position: "absolute",
  top: 0,
  zIndex: 0,
  width: "25%",
  height: "100%",
  borderRadius: "50%",
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
        left: "25%",
      },
      "2": {
        left: "50%",
      },
      "3": {
        left: "75%",
      },
    },
  },
});

const HeaderNavItemButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  "& svg": {
    color: "$primary-main",
    fontSize: 20,
  },
  "@sm": {
    "& svg": {
      fontSize: 24,
    },
  },
});
