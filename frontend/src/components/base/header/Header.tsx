import React, { useState } from "react";
import type { NextComponentType } from "next";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faRankingStar,
  faFireFlameCurved,
  faMagnifyingGlass,
  faUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import DynamicSwitch from "components/base/header/DynamicSwitch";
import DynamicIsland from "components/base/header/DynamicIsland";
import DynamicTheme from "components/base/header/DynamicTheme";
import { styled } from "styles/stitches.config";

type NavItem = {
  id: number;
  path: string;
  icon: IconProp;
};

const navList: NavItem[] = [
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
  const [navIndex, setNavIndext] = useState(0);

  const onNavIndexChange = (index: number) => {
    setNavIndext(index);
  };

  return (
    <HeaderWrap>
      <HeaderInner>
        <DynamicSwitch navList={navList} navIndex={navIndex} />
        <DynamicIsland
          navList={navList}
          navIndex={navIndex}
          onNavIndexChange={onNavIndexChange}
        />
        <DynamicTheme />
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
