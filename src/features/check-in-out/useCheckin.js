import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export function useCheckin() {
  const { t } = useLanguage();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    onSuccess: (data) => {
      toast.success(t("bookings.checkinSuccess", { id: data.id }));
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: () => toast.error(t("bookings.checkinError")),
  });

  return { checkin, isCheckingIn };
}
