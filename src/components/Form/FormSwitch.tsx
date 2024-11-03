import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Switch,
} from "@mui/material";
import {
  ControllerRenderProps,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";

interface FormSwitchProps<T extends FieldValues> {
  field: ControllerRenderProps<T, Path<T>>;
  error?: FieldError;
}

const FormSwitch = <T extends FieldValues>({
  error,
  field: { onChange, value, name },
}: FormSwitchProps<T>) => {
  return (
    <FormControl component="fieldset" error={!!error}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={!!value}
              onChange={(e) => onChange(e.target.checked)}
              color={error ? "error" : "primary"}
              name={name}
              id={name}
            />
          }
          label="Accept Terms & Conditions"
        />
      </FormGroup>
      {error && (
        <FormHelperText>Please accept the terms to proceed.</FormHelperText>
      )}
    </FormControl>
  );
};

export default FormSwitch;
