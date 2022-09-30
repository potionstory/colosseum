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
import { styled } from "@stitches/react";
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

const HeaderWrap = styled("header", {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  padding: "1rem",
});

const HeaderLeftButton = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  variants: {
    color: {
      bp2: { backgroundColor: "$theme" },
      gray: { backgroundColor: "$primary-main" },
    },
  },
  // "@sm": {
  //   backgroundColor: "$theme-inverse",
  // },
  // "@md": {
  //   backgroundColor: "$primary-main",
  // },
});

// flex justify-center items-center w-12 h-12 rounded-full bg-primary-sub sm:w-16 sm:h-16

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

  console.log("🚀 ~ file: Header.tsx ~ line 132 ~ navIndex", navIndex);

  return (
    <HeaderWrap>
      <div className="flex justify-between relative h-12 sm:h-16">
        <HeaderLeftButton
          color={{
            "@initial": "gray",
            "@bp2": "bp2",
          }}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-primary-main text-xl sm:text-3xl"
          />
        </HeaderLeftButton>
        <nav className="transition-all ease-out relative p-1 rounded-full bg-primary-sub sm:p-2">
          <ul className="overflow-hidden relative flex items-center justify-between rounded-full h-full w-40 sm:w-48">
            {nav.map((item, index) => {
              const { id, path, icon } = item;

              console.log(index);
              return (
                <li
                  key={id}
                  className={`absolute ${
                    index !== navIndex
                      ? "left-" +
                        (navIndex > index ? index * 12 : (index - 1) * 12)
                      : "-left-12"
                  } overflow-hidden rounded-full transition-all ease-out duration-500 w-10 h-10 sm:w-12 sm:h-12 bg-theme-inverse`}
                >
                  <button
                    type="button"
                    className="flex items-center justify-center w-full h-full"
                    onClick={() => setNavIndext(index)}
                  >
                    <Link href={path}>
                      <FontAwesomeIcon
                        icon={icon}
                        className="text-primary-main text-xl sm:text-2xl"
                      />
                    </Link>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          className="relative overflow-hidden w-12 h-12 sm:w-16 sm:h-16"
          onClick={onThemeHandler}
        >
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
        </button>
      </div>
    </HeaderWrap>
  );
};

export default Header;
