import type { NextPage } from "next";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <div className="max-w-sm overflow-hidden bg-primary-sub rounded-lg mt-4 text-white">
        <div className="px-6 py-4">
          <div className="text-primary-main font-bold text-xl mb-2">
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
