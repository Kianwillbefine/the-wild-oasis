import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
import { createCabin } from "../../services/apiCabins";

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("房源创建成功");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="房源名称" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", {
            required: "此字段为必填项",
          })}
        />
      </FormRow>

      <FormRow label="最多可住人数" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity", {
            required: "此字段为必填项",
            min: {
              value: 1,
              message: "可住人数至少应为 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="日常价格" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice", {
            required: "此字段为必填项",
            min: {
              value: 1,
              message: "价格至少应为 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="优惠金额" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isCreating}
          defaultValue={0}
          {...register("discount", {
            required: "此字段为必填项",
            validate: (value) =>
              value <= getValues().regularPrice || "优惠金额必须小于日常价格",
          })}
        />
      </FormRow>

      <FormRow
        label="页面描述"
        disabled={isCreating}
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isCreating}
          {...register("description", {
            required: "此字段为必填项",
          })}
        />
      </FormRow>

      <FormRow label="房源图片">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: "此字段为必填项",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type 是 HTML 原生属性 */}
        <Button variation="secondary" type="reset">
          取消
        </Button>
        <Button disabled={isCreating}>新增房源</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
