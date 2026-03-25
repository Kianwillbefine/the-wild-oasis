import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";
import { useLanguage } from "../../context/LanguageContext";

function CheckoutButton({ bookingId }) {
  const { t } = useLanguage();
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      {t("common.checkOut")}
    </Button>
  );
}

export default CheckoutButton;
