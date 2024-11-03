import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";

import dayjs from "dayjs";

import { Field } from "../../types/form";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormSwitch from "./FormSwitch";
import FormDatePicker from "./FormDatePicker";
import FormPassword from "./FormPassword";
import FormMultipleSelect from "./FormMultipleSelect";

interface FormFieldProps<T extends FieldValues> {
  element: Field;
  control: Control<T>;
}

const FormField = <T extends FieldValues>({
  element,
  control,
}: FormFieldProps<T>) => {
  const { name, rules, type, defaultValue } = element;
  const defaultVal = defaultValue
    ? type === "date"
      ? dayjs(defaultValue)
      : defaultValue
    : type === "switch"
    ? false
    : type === "multiple-select"
    ? []
    : type === "date"
    ? null
    : "";

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultVal as PathValue<T, Path<T>>}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        switch (type) {
          case "switch":
            return <FormSwitch field={field} error={error} />;
          case "date":
            return <FormDatePicker field={field} error={error} />;
          case "select":
            return <FormSelect element={element} error={error} field={field} />;
          case "multiple-select":
            return (
              <FormMultipleSelect
                element={element}
                error={error}
                field={field}
              />
            );
          case "password":
            return (
              <FormPassword element={element} field={field} error={error} />
            );
          default:
            return <FormInput element={element} error={error} field={field} />;
        }
      }}
    />
  );
};

export default FormField;
