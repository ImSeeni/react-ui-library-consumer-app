import React, { ReactNode } from "react";
import { MyStack } from "my-ui-library";

interface FormRowProps {
  gap?: number;
  children: ReactNode;
}

const FormRow = ({ gap = 3, children }: FormRowProps) => {
  return (
    <MyStack direction="row" gap={gap} sx={{ textAlign: "left" }}>
      {children}
    </MyStack>
  );
};

export default FormRow;
