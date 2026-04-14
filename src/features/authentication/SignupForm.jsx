import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// 邮箱正则表达式（Email regex）：/\S+@\S+\.\S+/

function SignupForm() {
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
      <FormRow label="姓名" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "此字段为必填项" })}
        />
      </FormRow>

      <FormRow label="邮箱地址" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "此字段为必填项",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "请输入有效的邮箱地址",
            },
          })}
        />
      </FormRow>

      <FormRow label="密码" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "此字段为必填项",
            minLength: {
              value: 8,
              message: "密码至少需要 8 个字符",
            },
          })}
        />
      </FormRow>

      <FormRow label="重复密码" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "此字段为必填项",
            validate: (value) => value === getValues().password || "两次输入的密码必须一致",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type 是 HTML 原生属性 */}
        <Button variation="secondary" type="reset" disabled={isLoading} onClick={reset}>
          取消
        </Button>
        <Button disabled={isLoading}>创建新用户</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
