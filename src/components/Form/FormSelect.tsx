import React from "react";
import { MyMenuItem, MyTextField } from "my-ui-library";
import {
  ControllerRenderProps,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { Field } from "../../types/form";

interface FormSelectProps<T extends FieldValues> {
  element: Field;
  field: ControllerRenderProps<T, Path<T>>;
  error?: FieldError;
}

const FormSelect = <T extends FieldValues>({
  element: { defaultValue, placeholder, options },
  error,
  field: { onChange, value },
}: FormSelectProps<T>) => {
  return (
    <MyTextField
      select
      value={value}
      error={!!error}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue || ""}
      helperText={error ? error.message : ""}
      fullWidth
    >
      {options?.map((option) => (
        <MyMenuItem key={option.value} value={option.value}>
          {option.label}
        </MyMenuItem>
      ))}
    </MyTextField>
  );
};

export default FormSelect;
