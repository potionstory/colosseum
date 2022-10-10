import React from "react";
import Link from "next/link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const Header: React.FC<DynamicIslandType> = ({
  navList,
  navIndex,
  onNavIndexChange,
}) => {
  return (
    <DynamicIsland>
      <DynamicIslandNavWrap>
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
                  onClick={() => onNavIndexChange(index)}
                >
                  <Link href={path}>
                    <FontAwesomeIcon icon={icon} />
                  </Link>
                </DynamicIslandNavItemButton>
              </DynamicIslandNavItem>
            );
          })}
        </DynamicIslandNavList>
      </DynamicIslandNavWrap>
    </DynamicIsland>
  );
};

export default Header;

const DynamicIslandNavWrap = styled("nav", {
  position: "relative",
  borderRadius: 32,
  backgroundColor: "$theme-inverse",
  padding: 4,
});

const DynamicIsland = styled("div", {
  display: "flex",
  justifyContent: "center",
  flex: 1,
});

const DynamicIslandNavList = styled("ul", {
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

const DynamicIslandNavItem = styled("li", {
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
