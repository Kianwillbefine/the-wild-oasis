import styled from "styled-components";
import { useStore } from "../stores/index";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const isDarkMode = useStore((state) => state.isDarkMode);

  const src = isDarkMode ? "/logo-dark.webp" : "/logo-light.webp";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
