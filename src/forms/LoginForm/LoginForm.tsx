import React from "react";
import { Form } from "../../components/Form";
import { Field, FieldGroup } from "../../types/form";
import { MyCard, MyStack } from "my-ui-library";

// Define the form data structure
type ILoginForm = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  startDate: Date;
};

const LoginForm = () => {
  const fieldGroups: FieldGroup[] = [
    {
      fields: [
        {
          name: "firstName",
          label: "First Name",
          type: "text",
          placeholder: "Enter your first name",
          rules: { required: "First name is required" },
          defaultValue: "first",
        },
        {
          name: "lastName",
          label: "Last Name",
          type: "text",
          placeholder: "Enter your last name",
          rules: { required: "Last name is required" },
          defaultValue: "last",
        },
      ], // These two fields are in the same row
    },
    {
      fields: [
        {
          name: "age",
          label: "Age",
          type: "number",
          placeholder: "Enter your age",
          rules: {
            required: "Age is required",
            min: { value: 18, message: "Must be 18 or older" },
          },
          defaultValue: "30",
        },
        {
          name: "gender",
          label: "Gender",
          defaultValue: "male",
          type: "select",
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
          ],
          rules: { required: "Please select your gender" },
        },
        {
          type: "date",
          name: "startDate",
          label: "Start Date",
          rules: {
            required: "Please select the start date",
          },
          defaultValue: "12/Oct/2024",
          format: "MMM YYYY",
        },
      ], // These two fields are in the same row
    },
  ];

  const actionField: Field = {
    name: "newsletter",
    label: "Subscribe to newsletter",
    type: "switch", // Type is 'switch'
  };

  const onSubmit = (data: ILoginForm) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <MyStack sx={{ maxWidth: "md", margin: "2rem auto" }}>
      <MyCard sx={{ padding: "2rem" }}>
        <Form<ILoginForm>
          fieldGroups={fieldGroups}
          onSubmit={onSubmit}
          actionField={actionField}
        />
      </MyCard>
    </MyStack>
  );
};

export default LoginForm;
