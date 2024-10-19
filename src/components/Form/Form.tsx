import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { MyButton, MyStack } from "my-ui-library";

import { Field, FormProps } from "../../types/form";
import FormContainer from "./FormContainer";
import FormColumn from "./FormColumn";
import { InputLabel, Typography } from "@mui/material";
import FormField from "./FormField";

const getValue = (field: Field) => {
  switch (field.type) {
    case "select":
      return field.defaultValue || {};

    case "switch":
      return field.defaultValue || false;

    default:
      return field.defaultValue || "";
  }
};

const Form = <T extends FieldValues>({
  gaps,
  actionField,
  fieldGroups,
  onSubmit,
  hasResetButton = true,
}: FormProps<T>) => {
  const defaultValues = fieldGroups.reduce((values: any[], group) => {
    let currentValue = {};
    group.fields.forEach((field: Field) => {
      currentValue = { ...currentValue, [field.name]: getValue(field) };
    });

    return { ...values, ...currentValue };
  }, {});

  const actionValue = actionField
    ? { [actionField?.name]: getValue(actionField) }
    : {};

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      ...defaultValues,
      ...actionValue,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <FormContainer control={control} fieldGroups={fieldGroups} gaps={gaps} />
      <MyStack
        direction="row"
        gap={gaps?.rowGap || 3}
        marginBlockStart={3}
        justifyContent="flex-end"
        alignItems="center"
        textAlign="left"
      >
        {actionField && (
          <FormColumn gap={gaps?.labelGap} key={actionField.name}>
            <InputLabel htmlFor="my-input">
              {!!actionField.rules?.required && (
                <Typography component="span" color="error" mr="0.25rem">
                  *
                </Typography>
              )}
              {actionField.label}
            </InputLabel>
            <FormField control={control} element={actionField} />
          </FormColumn>
        )}
        {hasResetButton ? (
          <MyButton type="reset" variant="outlined" onClick={() => reset()}>
            Reset
          </MyButton>
        ) : null}
        <MyButton type="submit">Submit</MyButton>
      </MyStack>
    </form>
  );
};

export default Form;
