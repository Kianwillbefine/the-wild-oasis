import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useLanguage } from "../../context/LanguageContext";

export function useCheckout() {
  const { t } = useLanguage();
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(t("bookings.checkoutSuccess", { id: data.id }));
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error(t("bookings.checkoutError")),
  });

  return { checkout, isCheckingOut };
}
