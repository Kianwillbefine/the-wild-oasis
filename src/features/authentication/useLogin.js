import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { login as loginApi } from "../../services/apiAuth";
import { useStore } from "../../stores/index";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const setAuthenticated = useStore((state) => state.setAuthenticated);
  const redirectAfterLogin = useStore((state) => state.redirectAfterLogin);
  const clearRedirectAfterLogin = useStore((state) => state.clearRedirectAfterLogin);

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      setAuthenticated(user.user);

      const destination = redirectAfterLogin || "/dashboard";
      clearRedirectAfterLogin();
      navigate(destination, { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("邮箱或密码不正确");
    },
  });

  return { login, isLoading };
}
