import {
  ControllerRenderProps,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { Field } from "../../types/form";
import { MyBox, MyIconButton, MyTextField } from "my-ui-library";
import { useState } from "react";

interface FormInputProps<T extends FieldValues> {
  element: Field;
  field: ControllerRenderProps<T, Path<T>>;
  error?: FieldError;
}

const FormPassword = <T extends FieldValues>({
  element: { placeholder },
  error,
  field: { onChange, value, name },
}: FormInputProps<T>) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <MyBox sx={{ position: "relative" }}>
      <MyTextField
        type={visibility ? "text" : "password"}
        error={!!error}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        helperText={error ? error.message : ""}
        name={name}
        id={name}
        fullWidth
      />

      <MyIconButton
        sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
        onClick={() => setVisibility(!visibility)}
      >
        {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </MyIconButton>
    </MyBox>
  );
};

export default FormPassword;
