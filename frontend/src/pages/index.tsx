import { useState } from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <div
      className={`h-screen w-full flex items-center justify-center flex-col ${
        darkToggle ? "dark" : "light"
      }`}
    >
      <label className="toggleDarkBtn">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span className="slideBtnTg round"></span>
      </label>
      <div className="max-w-sm rounded overflow-hidden bg-gray-100 p-5 rounded-lg mt-4 text-white dark:bg-gray-900">
        <img
          className="w-full"
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="text-gray-800 dark:text-gray-200 font-bold text-xl mb-2">
            The Coldest Sunset
          </div>
          <p className="text-gray-800 dark:text-gray-200">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            가나다라마바사아자차카타파하
            <br />
            0123456789~!@#$%^*()_+|
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
