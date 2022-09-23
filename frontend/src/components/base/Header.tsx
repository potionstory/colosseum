import React, { useRef } from "react";
import type { NextComponentType } from "next";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRankingStar,
  faFireFlameCurved,
  faMagnifyingGlass,
  faUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Player } from "@lottiefiles/react-lottie-player";
import * as themeLottie from "../../lotties/theme.json";

const Header: NextComponentType = () => {
  const { theme, setTheme } = useTheme();

  let ref = useRef(null);

  const onThemeHandler = () => {
    console.log("onThemeHandler");
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <header className="fixed bottom-0 left-0 w-full p-4">
      <div className="flex-1 relative flex h-12 px-14 sm:h-24">
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-primary-sub">
          prev
        </div>
        <nav className="transition-all ease-out relative flex-1 p-1 rounded-full bg-primary-sub sm:p-2">
          <ul className="flex gap-1 justify-between h-full">
            <li className="flex items-center justify-center w-10 sm:w-20">
              <Link href="/">
                <FontAwesomeIcon
                  icon={faRankingStar}
                  className="text-primary-main text-xl sm:text-4xl"
                />
              </Link>
            </li>
            <li className="flex items-center justify-center w-10 sm:w-20">
              <Link href="/trend">
                <FontAwesomeIcon
                  icon={faFireFlameCurved}
                  className="text-primary-main text-xl sm:text-4xl"
                />
              </Link>
            </li>
            <li className="flex items-center justify-center w-10 sm:w-20">
              <Link href="/search">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-primary-main text-xl sm:text-4xl"
                />
              </Link>
            </li>
            <li className="flex items-center justify-center w-10 sm:w-20">
              <Link href="/auth">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-primary-main text-xl sm:text-4xl"
                />
              </Link>
            </li>
            <li className="flex items-center justify-center w-10 sm:w-20">
              <Link href="/setting">
                <FontAwesomeIcon
                  icon={faGear}
                  className="text-primary-main text-xl sm:text-4xl"
                />
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="absolute overflow-hidden top-0 right-0 w-12 h-12"
          onClick={onThemeHandler}
        >
          <Player
            ref={ref}
            src={themeLottie}
            className="absolute -top-7 -left-7"
            style={{ width: 104, height: 104 }}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
