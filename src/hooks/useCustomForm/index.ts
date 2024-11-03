import { FieldValues, useForm } from "react-hook-form";
import { Field, FormProps } from "../../types/form";

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

interface CustomFormProps<T extends FieldValues> {
  fieldGroups: FormProps<T>["fieldGroups"];
  actionField: FormProps<T>["actionField"];
}

export const useCustomForm = <T extends FieldValues>({
  fieldGroups,
  actionField,
}: CustomFormProps<T>) => {
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

  return {
    handleSubmit,
    control,
    reset,
  };
};
