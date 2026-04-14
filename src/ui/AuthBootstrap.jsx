import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { AUTH_STATUS, useAuthStore } from "../stores/authStore";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function AuthBootstrap({ children }) {
  useUser();

  const authStatus = useAuthStore((state) => state.authStatus);
  const isHydrated = useAuthStore((state) => state.isHydrated);

  if (!isHydrated || authStatus === AUTH_STATUS.CHECKING)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  return children;
}

export default AuthBootstrap;
