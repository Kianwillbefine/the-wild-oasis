import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import { useLanguage } from "../../context/LanguageContext";

// 邮箱正则表达式（Email regex）：/\S+@\S+\.\S+/

function SignupForm() {
  const { t } = useLanguage();
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label={t("auth.fullName")} error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: t("auth.required") })}
        />
      </FormRow>

      <FormRow label={t("auth.email")} error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: t("auth.required"),
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: t("auth.validEmail"),
            },
          })}
        />
      </FormRow>

      <FormRow label={t("auth.password")} error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: t("auth.required"),
            minLength: {
              value: 8,
              message: t("auth.minPassword"),
            },
          })}
        />
      </FormRow>

      <FormRow label={t("auth.repeatPassword")} error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: t("auth.required"),
            validate: (value) => value === getValues().password || t("auth.passwordsMatch"),
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" disabled={isLoading} onClick={reset}>
          {t("common.cancel")}
        </Button>
        <Button disabled={isLoading}>{t("auth.createUser")}</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
