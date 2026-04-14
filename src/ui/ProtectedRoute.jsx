import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AUTH_STATUS, useAuthStore } from "../stores/authStore";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const authStatus = useAuthStore((state) => state.authStatus);
  const setRedirectAfterLogin = useAuthStore((state) => state.setRedirectAfterLogin);

  useEffect(
    function () {
      if (authStatus !== AUTH_STATUS.ANONYMOUS) return;

      const redirectPath = `${location.pathname}${location.search}${location.hash}`;
      setRedirectAfterLogin(redirectPath);
      navigate("/login", { replace: true });
    },
    [authStatus, location, navigate, setRedirectAfterLogin]
  );

  if (authStatus === AUTH_STATUS.AUTHENTICATED) return children;

  return null;
}

export default ProtectedRoute;
