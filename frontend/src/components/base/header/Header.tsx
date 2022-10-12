import React, { useEffect, useState } from "react";
import type { NextComponentType } from "next";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const [navIndex, setNavIndext] = useState(0);

  const onNavIndexChange = (index: number) => {
    setNavIndext(index);
  };

  useEffect(() => {
    setNavIndext(navList.findIndex((nav) => router.asPath === nav.path));
  }, []);

  return (
    <>
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
    </>
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
