import React, { useState } from "react";
import type { NextComponentType } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Header: NextComponentType = () => {
  const [active, isActive] = useState(false);

  console.log("🚀 ~ file: Header.tsx ~ line 26 ~ active", active);

  return (
    <header className="fixed bottom-0 left-0 w-full p-4">
      <div className="relative flex h-12 sm:h-20">
        <button
          type="button"
          className={`transition-all ease-out absolute top-0 w-12 h-12 rounded-full bg-theme-inverse ${
            active ? "left-0" : "left-14"
          }`}
          onClick={() => isActive(!active)}
        >
          이전
        </button>
        <nav
          className={`transition-all ease-out relative flex-1 p-1 rounded-full bg-theme-inverse ${
            active && "mx-14"
          }`}
        >
          <ul className="flex gap-1 justify-between h-full">
            <li className="rounded-full bg-primary-main">
              <FontAwesomeIcon icon={faRankingStar} />
            </li>
            <li className="rounded-full bg-primary-main">메뉴2</li>
            <li className="rounded-full bg-primary-main">메뉴3</li>
            <li className="rounded-full bg-primary-main">메뉴4</li>
            <li className="rounded-full bg-primary-main">메뉴5</li>
          </ul>
        </nav>
        <button
          type="button"
          className={`transition-all ease-out absolute top-0 w-12 h-12 rounded-full bg-theme-inverse ${
            active ? "right-0" : "right-14"
          }`}
          onClick={() => isActive(!active)}
        >
          다음
        </button>
      </div>
    </header>
  );
};

export default Header;
