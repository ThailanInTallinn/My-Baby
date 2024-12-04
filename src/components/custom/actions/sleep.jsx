import { Grid2, TextField } from "@mui/material";
import { useAppContext } from "../../../Context";
import DateTimePickerComponent from "../../dateTimePicker";

export default function Sleep({ data, setData }) {
  const { translate } = useAppContext();
  const storeLanguage = localStorage.getItem("language");
  return (
    <Grid2 container={true} spacing={2}>
      <Grid2 item="true" size={{ xs: 12 }}>
        <DateTimePickerComponent
          ampm={storeLanguage == "en" ? true : false}
          label={translate("data-hour-start")}
          format="DD/MM/YYYY HH:mm"
          name="start_date"
        />
      </Grid2>
      <Grid2 item="true" size={{ xs: 12 }}>
        <DateTimePickerComponent
          ampm={storeLanguage == "en" ? true : false}
          label={translate("data-hour-end")}
          format="DD/MM/YYYY HH:mm"
          name="end_date"
        />
      </Grid2>
      <Grid2 item="true" size={{ xs: 12 }}>
        <TextField
          rows={6}
          multiline={true}
          fullWidth
          label={translate("observation")}
        />
      </Grid2>
    </Grid2>
  );
}
