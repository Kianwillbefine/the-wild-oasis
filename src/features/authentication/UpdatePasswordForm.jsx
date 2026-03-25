import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUpdateUser } from "./useUpdateUser";
import { useLanguage } from "../../context/LanguageContext";

function UpdatePasswordForm() {
  const { t } = useLanguage();
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label={t("auth.newPassword")}
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: t("auth.required"),
            minLength: {
              value: 8,
              message: t("auth.minPassword"),
            },
          })}
        />
      </FormRow>

      <FormRow
        label={t("auth.confirmPassword")}
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: t("auth.required"),
            validate: (value) =>
              getValues().password === value || t("auth.passwordsMatch"),
          })}
        />
      </FormRow>
      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          {t("common.cancel")}
        </Button>
        <Button disabled={isUpdating}>{t("auth.updatePassword")}</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
