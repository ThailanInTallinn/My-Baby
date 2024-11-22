import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ptBR } from "@mui/x-date-pickers/locales";

export default function DatePickerComponent({ ...props }) {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={
        ptBR.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      <DemoContainer components={["DatePicker"]}>
        <DatePicker {...props} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
