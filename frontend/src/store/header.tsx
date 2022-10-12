import create from "zustand";
import { devtools } from "zustand/middleware";

interface CounterState {
  page: string;
  isDynamic: boolean;
  setPage: (page: string) => void;
  setIsDynamic: (isDynamic: boolean) => void;
}

const useHeaderStore = create<CounterState>()(
  devtools((set) => ({
    page: "/",
    isDynamic: false,
    setPage: (page) =>
      set({ page, isDynamic: false }, false, {
        type: "header/page",
        page,
      }),
    setIsDynamic: (isDynamic) =>
      set({ isDynamic }, false, {
        type: "header/isDynamic",
        isDynamic,
      }),
  }))
);

export default useHeaderStore;
