import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";
import { useLanguage } from "../../context/LanguageContext";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { t } = useLanguage();
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label={t("cabins.formName")} error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: t("auth.required"),
          })}
        />
      </FormRow>

      <FormRow label={t("cabins.formMaxCapacity")} error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: t("auth.required"),
            min: {
              value: 1,
              message: t("cabins.minCapacity"),
            },
          })}
        />
      </FormRow>

      <FormRow label={t("cabins.formRegularPrice")} error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: t("auth.required"),
            min: {
              value: 1,
              message: t("cabins.minCapacity"),
            },
          })}
        />
      </FormRow>

      <FormRow label={t("cabins.formDiscount")} error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: t("auth.required"),
            validate: (value) =>
              value <= getValues().regularPrice ||
              t("cabins.discountLessThanPrice"),
          })}
        />
      </FormRow>

      <FormRow
        label={t("cabins.formDescription")}
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register("description", {
            required: t("auth.required"),
          })}
        />
      </FormRow>

      <FormRow label={t("cabins.formPhoto")}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : t("auth.required"),
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          {t("common.cancel")}
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? t("cabins.editCabin") : t("cabins.createCabin")}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
