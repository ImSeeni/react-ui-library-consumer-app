import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import { Field } from "../../types/form";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormSwitch from "./FormSwitch";
import dayjs from "dayjs";

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
    : type === "date"
    ? null
    : "";

  console.log(name, defaultVal);

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
            return <FormSwitch field={field} error={error} />;
          case "date":
            return (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(newValue) =>
                      field.onChange(newValue ? newValue.toDate() : null)
                    }
                    slotProps={{
                      textField: {
                        error: !!error,
                        helperText: error ? error.message : "",
                        fullWidth: true,
                      },
                    }}
                    format={"MMM YYYY"}
                  />
                </DemoContainer>
              </LocalizationProvider>
            );
          default:
            return <FormInput element={element} error={error} field={field} />;
        }
      }}
    />
  );
};

export default FormField;
