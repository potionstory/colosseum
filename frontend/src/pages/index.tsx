import React from "react";
import type { NextPage } from "next";
import { useTrail, animated } from "react-spring";
import { styled } from "styles/stitches.config";

type logoBoxObjType = {
  length: "long" | "middle" | "short";
  order: "1st" | "2nd" | "3rd";
};

const logoBoxObj: logoBoxObjType[] = [
  {
    length: "middle",
    order: "2nd",
  },
  {
    length: "long",
    order: "1st",
  },
  {
    length: "short",
    order: "3rd",
  },
];

const Home: NextPage = () => {
  const logoDotTrail = useTrail(3, {
    config: { mass: 5, tension: 1000, friction: 200 },
    to: { y: 0 },
    from: { y: 6 },
    loop: { reverse: true },
  });

  return (
    <HomeWrap>
      <PageHeaderWarp>
        <PageHeaderIconWrap>
          <PageHeaderIconLogo>
            {logoBoxObj.map((item, index) => {
              const { length, order } = item;

              return (
                <PageHeaderIconLogoRoundBox key={index} length={length}>
                  <PageHeaderIconLogoRoundDot
                    style={logoDotTrail[index]}
                    order={order}
                  />
                  <PageHeaderIconLogoRoundLine order={order} />
                </PageHeaderIconLogoRoundBox>
              );
            })}
          </PageHeaderIconLogo>
        </PageHeaderIconWrap>
        <PageHeaderTitle>crownd</PageHeaderTitle>
        <PageHeaderBeta>beta</PageHeaderBeta>
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
  columnGap: 8,
  position: "sticky",
  top: 0,
  padding: 8,
  backgroundColor: "$theme-blur",
  backdropFilter: "blur(1rem)",
});

const PageHeaderIconWrap = styled("h1", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  width: 40,
  height: 40,
  borderRadius: "50%",
  boxSizing: "content-box",
  backgroundColor: "$neutral-inverse",
  "& svg": {
    fontSize: "1.5rem",
    color: "$primary-main",
  },
});

const PageHeaderIconLogo = styled("div", {
  display: "flex",
  columnGap: 4,
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  width: "100%",
  height: "100%",
});

const PageHeaderIconLogoRoundBox = styled("span", {
  display: "flex",
  flexDirection: "column",
  rowGap: 2,
  justifyContent: "flex-end",
  overflow: "hidden",
  position: "relative",
  width: 4,
  height: "100%",
  borderRadius: 2,
  variants: {
    length: {
      long: {
        height: 24,
      },
      middle: {
        height: 20,
      },
      short: {
        height: 16,
      },
    },
  },
});

const PageHeaderIconLogoRoundDot = styled(animated.span, {
  width: 4,
  height: 4,
  borderRadius: 2,
  backgroundColor: "$theme-inverse",
  willChange: "transform",
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
  flex: 1,
  width: "100%",
  borderRadius: 2,
  backgroundColor: "$theme-inverse",
  transformOrigin: "center",
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

const PageHeaderTitle = styled("strong", {
  height: 20,
  color: "$primary-main",
  fontSize: 20,
  textTransform: "uppercase",
  fontWeight: 900,
  lineHeight: "1.25rem",
  letterSpacing: -0.5,
});

const PageHeaderBeta = styled("span", {
  padding: "0 0.25rem",
  height: 16,
  borderRadius: 10,
  backgroundColor: "$primary-main",
  fontSize: "0.5rem",
  fontWeight: 900,
  color: "$theme",
  textTransform: "uppercase",
  lineHeight: "1rem",
});

const HomeChildren = styled("section", {
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
  padding: "1rem",
});
