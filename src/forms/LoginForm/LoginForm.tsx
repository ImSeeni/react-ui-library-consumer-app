import React from "react";
import { Form } from "../../components/Form";
import { FieldGroup } from "../../types/form";
import { MyCard, MyStack } from "my-ui-library";

// Define the form data structure
type ILoginForm = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
};

const LoginForm = () => {
  const fieldGroups: FieldGroup<ILoginForm>[] = [
    {
      fields: [
        {
          name: "firstName",
          label: "First Name",
          type: "text",
          placeholder: "Enter your first name",
          rules: { required: "First name is required" },
        },
        {
          name: "lastName",
          label: "Last Name",
          type: "text",
          placeholder: "Enter your last name",
          rules: { required: "Last name is required" },
        },
        {
          name: "newsletter",
          label: "Subscribe to newsletter",
          type: "switch", // Type is 'switch'
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
      ], // These two fields are in the same row
    },
  ];

  const onSubmit = (data: ILoginForm) => {
    console.log(data);
  };

  return (
    <MyStack sx={{ maxWidth: "md", margin: "2rem auto" }}>
      <MyCard sx={{ padding: "2rem" }}>
        <Form<ILoginForm>
          fieldGroups={fieldGroups}
          onSubmit={onSubmit}
          gaps={{ labelGap: 1, columnGap: 3, rowGap: 1 }}
        />
      </MyCard>
    </MyStack>
  );
};

export default LoginForm;
