import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../stores/index";
import { AUTH_STATUS } from "../stores/slices/authSlice";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const authStatus = useStore((state) => state.authStatus);
  const setRedirectAfterLogin = useStore((state) => state.setRedirectAfterLogin);

  useEffect(
    function () {
      if (authStatus !== AUTH_STATUS.ANONYMOUS) return;

      const redirectPath = `${location.pathname}${location.search}${location.hash}`;
      setRedirectAfterLogin(redirectPath);
      navigate("/login", { replace: true });
    },
    [authStatus, location, navigate, setRedirectAfterLogin],
  );

  if (authStatus === AUTH_STATUS.AUTHENTICATED) return children;

  return null;
}

export default ProtectedRoute;
