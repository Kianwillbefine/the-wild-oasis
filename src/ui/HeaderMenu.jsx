import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon
          onClick={() => navigate("/account")}
          title={t("common.account")}
          aria-label={t("common.account")}
        >
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <LanguageToggle />
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
