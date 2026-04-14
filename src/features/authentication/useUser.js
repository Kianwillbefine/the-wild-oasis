import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getCurrentUser } from "../../services/apiAuth";
import { useAuthStore } from "../../stores/authStore";

export function useUser() {
  const startAuthCheck = useAuthStore((state) => state.startAuthCheck);
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
  const setAnonymous = useAuthStore((state) => state.setAnonymous);

  const {
    isLoading,
    data: user,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(
    function () {
      if (isLoading) startAuthCheck();
    },
    [isLoading, startAuthCheck]
  );

  useEffect(
    function () {
      if (isLoading) return;

      if (isError || !user) {
        setAnonymous();
        return;
      }

      setAuthenticated(user);
    },
    [isError, isLoading, setAnonymous, setAuthenticated, user]
  );

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
