import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { MyButton } from "my-ui-library";

import { FormProps } from "../../types/form";
import FormContainer from "./FormContainer";

const Form = <T extends FieldValues>({
  fieldGroups,
  gaps,
  onSubmit,
}: FormProps<T>) => {
  const { handleSubmit, control } = useForm<T>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <FormContainer control={control} fieldGroups={fieldGroups} gaps={gaps} />
      <MyButton type="submit">Submit</MyButton>
    </form>
  );
};

export default Form;
