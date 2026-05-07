import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../stores/index";
import { AUTH_STATUS } from "../stores/slices/authSlice";

function PublicOnlyRoute({ children }) {
  const navigate = useNavigate();
  const authStatus = useStore((state) => state.authStatus);
  const redirectAfterLogin = useStore((state) => state.redirectAfterLogin);
  const clearRedirectAfterLogin = useStore((state) => state.clearRedirectAfterLogin);

  useEffect(
    function () {
      if (authStatus !== AUTH_STATUS.AUTHENTICATED) return;

      const destination = redirectAfterLogin || "/dashboard";
      clearRedirectAfterLogin();
      navigate(destination, { replace: true });
    },
    [authStatus, clearRedirectAfterLogin, navigate, redirectAfterLogin],
  );

  if (authStatus === AUTH_STATUS.ANONYMOUS) return children;

  return null;
}

export default PublicOnlyRoute;
