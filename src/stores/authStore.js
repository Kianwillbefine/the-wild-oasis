import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const AUTH_STATUS = {
  CHECKING: "checking",
  AUTHENTICATED: "authenticated",
  ANONYMOUS: "anonymous",
};

export const useAuthStore = create(
  persist(
    (set) => ({
      authStatus: AUTH_STATUS.CHECKING,
      isHydrated: false,
      redirectAfterLogin: null,
      user: null,

      startAuthCheck: () =>
        set({
          authStatus: AUTH_STATUS.CHECKING,
        }),

      setAuthenticated: (user = null) =>
        set({
          authStatus: AUTH_STATUS.AUTHENTICATED,
          user,
          isHydrated: true,
        }),

      setAnonymous: () =>
        set({
          authStatus: AUTH_STATUS.ANONYMOUS,
          user: null,
          isHydrated: true,
        }),

      setRedirectAfterLogin: (path) =>
        set({
          redirectAfterLogin: path,
        }),

      clearRedirectAfterLogin: () =>
        set({
          redirectAfterLogin: null,
        }),

      finishHydration: () =>
        set({
          isHydrated: true,
        }),

      resetAuthStore: () =>
        set({
          authStatus: AUTH_STATUS.ANONYMOUS,
          isHydrated: true,
          redirectAfterLogin: null,
          user: null,
        }),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        redirectAfterLogin: state.redirectAfterLogin,
      }),
      onRehydrateStorage: () => (state) => {
        state?.finishHydration();
      },
    }
  )
);
