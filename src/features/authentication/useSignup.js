import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useLanguage } from "../../context/LanguageContext";

export function useSignup() {
  const { t } = useLanguage();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => toast.success(t("auth.signupSuccess")),
  });

  return { signup, isLoading };
}
