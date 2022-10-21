import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import {
  useSpring,
  useSpringRef,
  useChain,
  easings,
  animated,
} from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styles/stitches.config";

type logoBoxObjType = {
  length: "long" | "middle" | "short";
  order: "1st" | "2nd" | "3rd" | undefined;
  isDot: boolean;
};

const logoBoxObj: logoBoxObjType[] = [
  {
    length: "short",
    order: "2nd",
    isDot: true,
  },
  {
    length: "middle",
    order: undefined,
    isDot: false,
  },
  {
    length: "long",
    order: "1st",
    isDot: true,
  },
  {
    length: "middle",
    order: undefined,
    isDot: false,
  },
  {
    length: "short",
    order: "3rd",
    isDot: true,
  },
];

const Home: NextPage = () => {
  const [items, setItems] = useState(logoBoxObj);
  const logoRoundDot1stAnimatedRef = useSpringRef();
  const logoRoundDot2ndAnimatedRef = useSpringRef();
  const logoRoundDot3rdAnimatedRef = useSpringRef();

  const logoRoundDot1stAnimated = useSpring({
    from: { y: -8 },
    to: { y: 0 },
    loop: { reverse: true },
    config: {
      duration: 400,
      easing: easings.easeInOutCubic,
    },
    delay: 400,
  });

  const logoRoundDot2ndAnimated = useSpring({
    from: { y: -24 },
    to: { y: 0 },
    loop: { reverse: true },
    config: {
      duration: 400,
      easing: easings.easeInOutCubic,
    },
    delay: 200,
  });

  const logoRoundDot3rdAnimated = useSpring({
    from: { y: -24 },
    to: { y: 0 },
    loop: { reverse: true },
    config: {
      duration: 400,
      easing: easings.easeInOutCubic,
    },
    delay: 0,
  });

  useEffect(() => {
    if (items.length === 0) {
      setTimeout(() => {
        setItems(logoBoxObj);
      }, 2000);
    }
  }, [items]);

  return (
    <HomeWrap>
      <PageHeaderWarp>
        <PageHeaderIconWrap>
          <PageHeaderIconLogo>
            {logoBoxObj.map((item, index) => {
              const { length, order, isDot } = item;

              return (
                <PageHeaderIconLogoRoundBox key={index}>
                  {isDot && (
                    <PageHeaderIconLogoRoundDot
                      style={(() => {
                        switch (order) {
                          case "1st":
                            return logoRoundDot1stAnimated;
                          case "2nd":
                            return logoRoundDot2ndAnimated;
                          case "3rd":
                            return logoRoundDot3rdAnimated;
                          default:
                            return undefined;
                        }
                      })()}
                      order={order}
                    />
                  )}
                  <PageHeaderIconLogoRoundLine length={length} order={order} />
                </PageHeaderIconLogoRoundBox>
              );
            })}
          </PageHeaderIconLogo>
        </PageHeaderIconWrap>
        <PageHeaderTitle>colosseum</PageHeaderTitle>
      </PageHeaderWarp>
      <HomeChildren>
        <img src="https://www.apple.com/v/iphone-14/b/images/overview/display/xdr_display__cxbhgrgt5keq_large.jpg" />
        <img src="https://www.apple.com/v/iphone-14/b/images/overview/display/xdr_display__cxbhgrgt5keq_large.jpg" />
        <img src="https://www.apple.com/v/iphone-14/b/images/overview/display/xdr_display__cxbhgrgt5keq_large.jpg" />
        <img src="https://www.apple.com/v/iphone-14/b/images/overview/display/xdr_display__cxbhgrgt5keq_large.jpg" />
      </HomeChildren>
    </HomeWrap>
  );
};

export default Home;

const HomeWrap = styled("article", {
  display: "flex",
  flexDirection: "column",
});

const PageHeaderWarp = styled("section", {
  display: "flex",
  alignItems: "center",
  columnGap: "1rem",
  position: "sticky",
  top: 0,
  padding: "1rem",
  backgroundColor: "$theme-blur",
  backdropFilter: "blur(1rem)",
});

const PageHeaderIconWrap = styled("h1", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  borderRadius: "50%",
  "& svg": {
    fontSize: "1.5rem",
    color: "$primary-main",
  },
});

const PageHeaderIconLogo = styled("div", {
  display: "flex",
  columnGap: 2,
  alignItems: "flex-end",
  justifyContent: "center",
  position: "relative",
  padding: "0 8px",
  width: "100%",
  height: "100%",
});

const PageHeaderIconLogoRoundBox = styled("span", {
  display: "flex",
  flexDirection: "column",
  rowGap: 4,
  justifyContent: "flex-end",
  overflow: "hidden",
  position: "relative",
  width: 8,
  height: "100%",
  borderRadius: 4,
});

const PageHeaderIconLogoRoundDot = styled(animated.span, {
  width: 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: "$theme-inverse",
  variants: {
    order: {
      "1st": {
        backgroundColor: "$error-main",
      },
      "2nd": {
        backgroundColor: "$warning-main",
      },
      "3rd": {
        backgroundColor: "$success-main",
      },
    },
  },
});

const PageHeaderIconLogoRoundLine = styled(animated.span, {
  width: "100%",
  borderRadius: 4,
  backgroundColor: "$theme-inverse",
  transformOrigin: "center",
  variants: {
    length: {
      long: {
        height: 36,
      },
      middle: {
        height: 28,
      },
      short: {
        height: 20,
      },
    },
    order: {
      "1st": {
        backgroundColor: "$error-main",
      },
      "2nd": {
        backgroundColor: "$warning-main",
      },
      "3rd": {
        backgroundColor: "$success-main",
      },
    },
  },
});

const PageHeaderTitle = styled("strong", {
  background: "linear-gradient(135deg, $primary-main, $error-main)",
  backgroundClip: "text",
  color: "transparent",
  fontSize: "1.5rem",
  textTransform: "uppercase",
  fontWeight: 900,
  letterSpacing: -0.5,
});

const HomeChildren = styled("section", {
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
  padding: "1rem",
});
