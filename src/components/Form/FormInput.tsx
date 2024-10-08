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
  element: { type, defaultValue, placeholder },
  error,
  field: { onChange, value },
}: FormInputProps<T>) => {
  return (
    <MyTextField
      type={type}
      error={!!error}
      value={value || ""}
      onChange={onChange}
      defaultValue={defaultValue}
      placeholder={placeholder}
      helperText={error ? error.message : ""}
      fullWidth
    />
  );
};

export default FormInput;
