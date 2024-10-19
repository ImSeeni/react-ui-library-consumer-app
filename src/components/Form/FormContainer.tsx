import React from "react";
import { InputLabel, Typography } from "@mui/material";
import { MyStack } from "my-ui-library";

import FormRow from "./FormRow";
import FormColumn from "./FormColumn";
import FormField from "./FormField";
import { Control, FieldValues } from "react-hook-form";
import { Field, FormProps } from "../../types/form";

interface FormContainerProps<T extends FieldValues>
  extends Omit<FormProps<T>, "onSubmit"> {
  control: Control<T>;
}

const FormContainer = <T extends FieldValues>({
  control,
  fieldGroups,
  gaps,
}: FormContainerProps<T>) => {
  return (
    <MyStack sx={{ width: "100%" }} gap={gaps?.rowGap || 3}>
      {fieldGroups.map((group, index) => (
        <FormRow gap={gaps?.columnGap} key={index}>
          {group.fields.map((field: Field) => (
            <FormColumn gap={gaps?.labelGap} key={field.name}>
              <InputLabel htmlFor="my-input">
                {!!field.rules?.required && (
                  <Typography component="span" color="error" mr="0.25rem">
                    *
                  </Typography>
                )}
                {field.label}
              </InputLabel>
              <FormField control={control} element={field} />
            </FormColumn>
          ))}
        </FormRow>
      ))}
    </MyStack>
  );
};

export default FormContainer;
