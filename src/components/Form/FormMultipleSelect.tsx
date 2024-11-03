import { MyBox, MyMenuItem } from "my-ui-library";

import {
  ControllerRenderProps,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";

import {
  Chip,
  colors,
  FormHelperText,
  OutlinedInput,
  Select,
} from "@mui/material";

import { Field } from "../../types/form";

interface FormMultipleSelectProps<T extends FieldValues> {
  element: Field;
  field: ControllerRenderProps<T, Path<T>>;
  error?: FieldError;
}

const FormMultipleSelect = <T extends FieldValues>({
  element: { defaultValue, placeholder, options, label },
  error,
  field: { onChange, value, name },
}: FormMultipleSelectProps<T>) => {
  console.log("Multiple Select", error);
  return (
    <MyBox>
      <Select
        multiple
        fullWidth
        displayEmpty
        onChange={onChange}
        error={!!error}
        value={value || []} // Ensure value is an array
        input={
          <OutlinedInput
            label={label}
            name={name}
            id={name}
            inputProps={{ "aria-label": "Without label" }}
          />
        }
        renderValue={(selected) => (
          <MyBox sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {(selected as string[]).map((value) => (
              <Chip
                key={value}
                label={
                  options?.find((option) => option.value === value)?.label ||
                  value
                }
              />
            ))}
          </MyBox>
        )}
      >
        {options?.map((option) => (
          <MyMenuItem key={option.value} value={option.value}>
            {option.label}
          </MyMenuItem>
        ))}
      </Select>
      {error && (
        <FormHelperText variant="outlined" className="Mui-error">
          {" "}
          {error.message}
        </FormHelperText>
      )}
    </MyBox>
  );
};

export default FormMultipleSelect;
