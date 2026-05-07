import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getCurrentUser } from "../../services/apiAuth";
import { useStore } from "../../stores/index";

export function useUser() {
  const startAuthCheck = useStore((state) => state.startAuthCheck);
  const setAuthenticated = useStore((state) => state.setAuthenticated);
  const setAnonymous = useStore((state) => state.setAnonymous);

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
    [isLoading, startAuthCheck],
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
    [isError, isLoading, setAnonymous, setAuthenticated, user],
  );

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
