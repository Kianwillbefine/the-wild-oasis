import { create } from "zustand";
import { persist } from "zustand/middleware";

import { createAuthSlice } from "./slices/authSlice";
import { createThemeSlice } from "./slices/themeSlice";

export const useStore = create(
  persist(
    (...arg) => ({
      ...createAuthSlice(...arg),
      ...createThemeSlice(...arg),
    }),
    {
      name: "the-wild-oasis",
      version: 1,
      migrate: (persistedState) => ({
        ...(typeof persistedState?.isDarkMode === "boolean"
          ? { isDarkMode: persistedState.isDarkMode }
          : {}),
        ...(persistedState?.redirectAfterLogin
          ? { redirectAfterLogin: persistedState.redirectAfterLogin }
          : {}),
      }),
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...(typeof persistedState?.isDarkMode === "boolean"
          ? { isDarkMode: persistedState.isDarkMode }
          : {}),
        ...(persistedState?.redirectAfterLogin
          ? { redirectAfterLogin: persistedState.redirectAfterLogin }
          : {}),
      }),
      partialize: (state) => ({
        redirectAfterLogin: state.redirectAfterLogin,
        isDarkMode: state.isDarkMode,
      }),
    },
  ),
);
