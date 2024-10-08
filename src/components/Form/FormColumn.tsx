import { MyStack } from "my-ui-library";
import React, { ReactNode } from "react";

interface FormColumnProps {
  gap?: number;
  children: ReactNode;
}

const FormColumn = ({ gap = 1, children }: FormColumnProps) => {
  return (
    <MyStack direction="column" flex={1} gap={gap}>
      {children}
    </MyStack>
  );
};

export default FormColumn;
