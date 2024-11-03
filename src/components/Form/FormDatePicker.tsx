import {
  ControllerRenderProps,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";

interface FormDatePickerProps<T extends FieldValues> {
  field: ControllerRenderProps<T, Path<T>>;
  error?: FieldError;
}

const FormDatePicker = <T extends FieldValues>({
  error,
  field: { onChange, value, name },
}: FormDatePickerProps<T>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]} sx={{ padding: 0 }}>
        <DatePicker
          value={value ? dayjs(value) : null}
          onChange={(newValue) => onChange(newValue ? newValue.toDate() : null)}
          slotProps={{
            textField: {
              error: !!error,
              helperText: error ? error.message : "",
              fullWidth: true,
              name: name,
              id: name,
            },
          }}
          format={"MMM YYYY"}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default FormDatePicker;
