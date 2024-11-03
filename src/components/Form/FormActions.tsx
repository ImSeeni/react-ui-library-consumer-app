import { MyButton, MyStack, MyTypography } from "my-ui-library";
import React from "react";
import FormColumn from "./FormColumn";
import { InputLabel } from "@mui/material";
import FormField from "./FormField";
import { Control, FieldValues, UseFormReset } from "react-hook-form";
import { FormProps } from "../../types/form";

interface Props<T extends FieldValues>
  extends Omit<FormProps<T>, "onSubmit" | "fieldGroups"> {
  control: Control<T>;
  reset: UseFormReset<any>;
}

const FormActions = <T extends FieldValues>({
  gaps,
  actionField,
  control,
  hasResetButton,
  hasCancelButton,
  submitButtonLabel,
  onCancel,
  reset,
}: Props<T>) => {
  return (
    <MyStack
      direction="row"
      gap={gaps?.rowGap || 2}
      justifyContent="space-between"
      alignItems="center"
      textAlign="left"
    >
      {actionField && (
        <FormColumn gap={gaps?.labelGap} key={actionField.name}>
          <InputLabel htmlFor={actionField.name}>
            {!!actionField.rules?.required && (
              <MyTypography component="span" color="error" mr="0.25rem">
                *
              </MyTypography>
            )}
            {actionField.label}
          </InputLabel>
          <FormField control={control} element={actionField} />
        </FormColumn>
      )}

      {hasCancelButton ? (
        <MyButton
          type="button"
          variant="outlined"
          onClick={() => onCancel && onCancel()}
        >
          Cancel
        </MyButton>
      ) : null}

      {hasResetButton ? (
        <MyButton type="reset" variant="outlined" onClick={() => reset()}>
          Reset
        </MyButton>
      ) : null}

      <MyButton type="submit">{submitButtonLabel || "Submit"}</MyButton>
    </MyStack>
  );
};

export default FormActions;
