import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";
import { Field } from "../../types/form";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { FormControlLabel, Switch } from "@mui/material";

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
    ? defaultValue
    : type === "switch"
    ? false
    : "";
  return (
    <Controller
      name={name as Path<T>}
      control={control}
      defaultValue={defaultVal as PathValue<T, Path<T>>}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        switch (type) {
          case "select":
            return <FormSelect element={element} error={error} field={field} />;
          case "switch":
            return (
              <FormControlLabel
                control={
                  <Switch
                    checked={!!field.value}
                    onChange={(e) => field.onChange(e.target.checked)} // Handle checked state
                  />
                }
                label={!!field.value ? "Active" : "Inactive"}
              />
            );
          default:
            return <FormInput element={element} error={error} field={field} />;
        }
      }}
    />
  );
};

export default FormField;
