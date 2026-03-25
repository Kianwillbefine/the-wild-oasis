import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLanguage } from "../../context/LanguageContext";

function Logout() {
  const { t } = useLanguage();
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon
      disabled={isLoading}
      onClick={logout}
      title={t("common.logout")}
      aria-label={t("common.logout")}
    >
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
