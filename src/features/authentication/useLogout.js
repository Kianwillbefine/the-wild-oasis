import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../services/apiAuth";
import { useStore } from "../../stores/index";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const resetAuthStore = useStore((state) => state.resetAuthStore);

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
