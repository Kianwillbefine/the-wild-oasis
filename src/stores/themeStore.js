import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

function getSystemTheme() {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(isDarkMode) {
  if (typeof document === "undefined") return;

  document.documentElement.classList.toggle("dark-mode", isDarkMode);
  document.documentElement.classList.toggle("light-mode", !isDarkMode);
}

const initialIsDarkMode = getSystemTheme();

export const useThemeStore = create(
  persist(
    (set) => ({
      isDarkMode: initialIsDarkMode,
      setIsDarkMode: (isDarkMode) => {
        applyTheme(isDarkMode);
        set({ isDarkMode });
      },
      toggleDarkMode: () =>
        set((state) => {
          const nextIsDarkMode = !state.isDarkMode;
          applyTheme(nextIsDarkMode);

          return { isDarkMode: nextIsDarkMode };
        }),
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        applyTheme(state?.isDarkMode ?? initialIsDarkMode);
      },
    }
  )
);

applyTheme(initialIsDarkMode);
