import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_STATUS, useAuthStore } from "../stores/authStore";

function PublicOnlyRoute({ children }) {
  const navigate = useNavigate();
  const authStatus = useAuthStore((state) => state.authStatus);
  const redirectAfterLogin = useAuthStore((state) => state.redirectAfterLogin);
  const clearRedirectAfterLogin = useAuthStore(
    (state) => state.clearRedirectAfterLogin
  );

  useEffect(
    function () {
      if (authStatus !== AUTH_STATUS.AUTHENTICATED) return;

      const destination = redirectAfterLogin || "/dashboard";
      clearRedirectAfterLogin();
      navigate(destination, { replace: true });
    },
    [authStatus, clearRedirectAfterLogin, navigate, redirectAfterLogin]
  );

  if (authStatus === AUTH_STATUS.ANONYMOUS) return children;

  return null;
}

export default PublicOnlyRoute;
