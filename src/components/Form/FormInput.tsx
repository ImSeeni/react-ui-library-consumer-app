import React from "react";
import { MyTextField } from "my-ui-library";
import {
  ControllerRenderProps,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { Field } from "../../types/form";

interface FormInputProps<T extends FieldValues> {
  element: Field;
  field: ControllerRenderProps<T, Path<T>>;
  error?: FieldError;
}

const FormInput = <T extends FieldValues>({
  element: { type, placeholder },
  error,
  field: { onChange, value, name },
}: FormInputProps<T>) => {
  return (
    <MyTextField
      type={type}
      error={!!error}
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder}
      helperText={error ? error.message : ""}
      name={name}
      id={name}
      fullWidth
    />
  );
};

export default FormInput;
