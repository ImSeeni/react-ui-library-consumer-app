import { FieldValues } from "react-hook-form";

import { FormProps } from "../../types/form";
import FormContainer from "./FormContainer";
import { useCustomForm } from "../../hooks/useCustomForm";
import FormActions from "./FormActions";
import { MyBox } from "my-ui-library";

const Form = <T extends FieldValues>({
  gaps,
  actionField,
  fieldGroups,
  onSubmit,
  hasResetButton = true,
}: FormProps<T>) => {
  const { control, handleSubmit, reset } = useCustomForm({
    actionField,
    fieldGroups,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <FormContainer control={control} fieldGroups={fieldGroups} gaps={gaps} />

      <MyBox sx={{ mt: 3 }}>
        <FormActions
          control={control}
          reset={reset}
          actionField={actionField}
          gaps={gaps}
          hasResetButton={hasResetButton}
        />
      </MyBox>
    </form>
  );
};

export default Form;
