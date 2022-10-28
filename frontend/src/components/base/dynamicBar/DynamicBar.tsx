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
import DynamicSwitch from "components/base/dynamicBar/DynamicSwitch";
import DynamicIsland from "components/base/dynamicBar/DynamicIsland";
import DynamicTheme from "components/base/dynamicBar/DynamicTheme";
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

const DynamicBar: NextComponentType = () => {
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
      <DynamicBarWrap>
        <DynamicBarInner>
          <DynamicSwitch navList={navList} navIndex={navIndex} />
          <DynamicIsland
            navList={navList}
            navIndex={navIndex}
            onNavIndexChange={onNavIndexChange}
          />
          <DynamicTheme />
        </DynamicBarInner>
      </DynamicBarWrap>
    </>
  );
};

export default DynamicBar;

const DynamicBarWrap = styled("section", {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  padding: 8,
});

const DynamicBarInner = styled("div", {
  display: "flex",
  columnGap: 8,
  justifyContent: "space-between",
  position: "relative",
  height: 48,
  "@sm": {
    height: 60,
  },
});
