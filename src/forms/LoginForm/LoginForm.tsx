import React, { useState } from "react";
import { Form } from "../../components/Form";
import { Field, FieldGroup } from "../../types/form";
import { MyButton, MyCard, MyStack } from "my-ui-library";
import DialogForm from "../../components/Form/DialogForm";

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
          name: "password",
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
          rules: { required: "Password is required" },
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
          label: "Hobbies",
          name: "hobbies",
          type: "multiple-select",
          options: [
            { label: "Reading", value: "reading" },
            { label: "Cooking", value: "cooking" },
            { label: "Traveling", value: "traveling" },
            { label: "Gaming", value: "gaming" },
            { label: "Music", value: "music" },
          ],
          rules: {
            required: "Please select the hobby",
          },
        },
        // {
        //   type: "date",
        //   name: "startDate",
        //   label: "Start Date",
        //   rules: {
        //     required: "Please select the start date",
        //   },
        //   defaultValue: "12/Oct/2024",
        //   format: "MMM YYYY",
        // },
      ], // These two fields are in the same row
    },
  ];

  const actionField: Field = {
    name: "newsletter",
    label: "",
    type: "switch", // Type is 'switch'
  };

  const onSubmit = (data: ILoginForm) => {
    console.log(data);

    alert(JSON.stringify(data, null, 2));
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <MyStack sx={{ maxWidth: "md", margin: "2rem auto" }}>
      {/* <MyCard sx={{ padding: "2rem" }}>
        <Form<ILoginForm>
          fieldGroups={fieldGroups}
          onSubmit={onSubmit}
          actionField={actionField}
        />
      </MyCard> */}

      <MyButton onClick={handleOpenDialog}>Open Form Dialog</MyButton>

      <DialogForm
        fieldGroups={fieldGroups}
        isOpen={isOpen}
        onSubmit={onSubmit}
        closeDialog={handleCloseDialog}
        title="Login Form"
        actionField={actionField}
        hasResetButton={true}
        maxWidth="md"
        submitButtonLabel="Login"
        hasCancelButton
        onCancel={handleCloseDialog}
      />
    </MyStack>
  );
};

export default LoginForm;
