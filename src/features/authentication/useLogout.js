import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../services/apiAuth";
import { useAuthStore } from "../../stores/authStore";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const resetAuthStore = useAuthStore((state) => state.resetAuthStore);

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      resetAuthStore();
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
