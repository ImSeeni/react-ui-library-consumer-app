import React from "react";

import { FieldValues } from "react-hook-form";

import CloseIcon from "@mui/icons-material/Close";

import {
  MyDialog,
  MyDialogActions,
  MyDialogContent,
  MyDialogTitle,
  MyIconButton,
  MyStack,
  MyTypography,
} from "my-ui-library";

import { FormProps } from "../../types/form";
import { useCustomForm } from "../../hooks/useCustomForm";
import FormContainer from "./FormContainer";
import FormActions from "./FormActions";
import { Breakpoint } from "@mui/material";

interface Props<T extends FieldValues> extends FormProps<T> {
  title: string;
  isOpen: boolean;
  closeDialog: () => void;
  maxWidth?: Breakpoint | false;
}

const DialogForm = <T extends FieldValues>({
  fieldGroups,
  isOpen,
  onSubmit,
  closeDialog,
  title,
  actionField,
  gaps,
  hasResetButton,
  hasCancelButton,
  submitButtonLabel,
  onCancel,
  maxWidth = "sm",
}: Props<T>) => {
  const { control, handleSubmit, reset } = useCustomForm({
    actionField,
    fieldGroups,
  });

  return (
    <MyDialog open={isOpen} onClose={closeDialog} maxWidth={maxWidth} fullWidth>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <MyDialogTitle
          sx={{
            padding: "16px 24px",
            borderBottom: "1px solid #eee",
            marginBottom: "24px",
          }}
        >
          <MyStack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <MyTypography variant="h4">{title}</MyTypography>
            <MyIconButton onClick={closeDialog}>
              <CloseIcon />
            </MyIconButton>
          </MyStack>
        </MyDialogTitle>

        <MyDialogContent sx={{ padding: "24px" }}>
          <FormContainer
            control={control}
            fieldGroups={fieldGroups}
            gaps={gaps}
          />
        </MyDialogContent>

        <MyDialogActions
          sx={{
            padding: "16px 24px",
            display: "block",
            borderTop: "1px solid #eee",
          }}
        >
          <FormActions
            control={control}
            reset={reset}
            actionField={actionField}
            gaps={gaps}
            hasResetButton={hasResetButton}
            hasCancelButton={hasCancelButton}
            onCancel={onCancel}
            submitButtonLabel={submitButtonLabel}
          />
        </MyDialogActions>
      </form>
    </MyDialog>
  );
};

export default DialogForm;
