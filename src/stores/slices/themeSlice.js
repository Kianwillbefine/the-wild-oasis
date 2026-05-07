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

export const createThemeSlice = (set, get) => ({
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
});

applyTheme(initialIsDarkMode);
