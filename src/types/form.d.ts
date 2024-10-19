import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

type InputTypes = {
  className?: string;
  id?: string;
  label?: string;
  type: string;
  children?: JSX.Element;
} & Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  ""
>;

export type FormInputType<TFormValues> = {
  error?: FieldError;
  values?: FieldValues;
  rules?: RegisterOptions;
} & InputTypes;

// Define types for individual form field configurations
export interface FieldOption {
  label: string;
  value: string;
}

export interface Field {
  name: string;
  label: string;
  type: "text" | "number" | "select" | "email" | "password" | "switch" | "date";
  placeholder?: string;
  defaultValue?: string;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  options?: FieldOption[]; // Only for "select" field type
  format?: string; // Only for "date" field type
}

export interface FieldGroup {
  fields: Field[]; // Fields to be rendered in the same row
}

interface IGaps {
  rowGap?: number;
  columnGap?: number;
  labelGap?: number;
}

export interface FormProps<T extends FieldValues> {
  fieldGroups: FieldGroup<T>[]; // Groups of fields for row layout
  onSubmit: SubmitHandler<T>;
  actionField?: Field;
  gaps?: IGaps;
  hasResetButton?: boolean;
}
