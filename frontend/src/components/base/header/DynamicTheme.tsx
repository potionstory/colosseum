import React from "react";
import { useTheme } from "next-themes";
import { useSpring, animated, easings } from "react-spring";
import { styled } from "styles/stitches.config";
import ThemeLightSVG from "static/svg/ico_theme_light.svg";
import ThemeDarkSVG from "static/svg/ico_theme_dark.svg";

const DynamicTheme: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const onThemeHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const themeSVGWrapAnimated = useSpring({
    rotateZ: theme === "dark" ? 0 : 180,
    config: {
      duration: 400,
      easing: easings.easeInOutCubic,
    },
  });

  const themeSVGBoxAnimated = useSpring({
    rotateZ: theme === "dark" ? 0 : 360,
    config: {
      duration: 800,
      easing: easings.easeInOutCubic,
    },
  });

  return (
    <DynamicThemeWrap>
      <DynamicThemeInner>
        <DynamicThemeSVGWrap style={themeSVGWrapAnimated}>
          <DynamicThemeSVGBox style={themeSVGBoxAnimated}>
            <ThemeDarkSVG />
          </DynamicThemeSVGBox>
          <DynamicThemeSVGBox style={themeSVGBoxAnimated}>
            <ThemeLightSVG />
          </DynamicThemeSVGBox>
        </DynamicThemeSVGWrap>
        <DynamicThemeButton onClick={onThemeHandler} />
      </DynamicThemeInner>
    </DynamicThemeWrap>
  );
};

export default DynamicTheme;

const DynamicThemeWrap = styled("div", {
  display: "flex",
  padding: 4,
  width: 48,
  height: "100%",
  borderRadius: "50%",
  backgroundColor: "$primary-main",
  "@sm": {
    width: 60,
  },
});

const DynamicThemeInner = styled("div", {
  flex: 1,
  position: "relative",
  overflow: "hidden",
  borderRadius: "50%",
  backgroundColor: "$theme-inverse",
});

const DynamicThemeButton = styled("button", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

const DynamicThemeSVGWrap = styled(animated.div, {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
});

const DynamicThemeSVGBox = styled(animated.div, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 10,
  height: 40,
  "& svg": {
    width: "100%",
    height: "100%",
  },
  "@sm": {
    padding: 13,
    height: 52,
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
