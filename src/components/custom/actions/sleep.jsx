import { Grid2, TextField } from "@mui/material";
import DateTimePickerComponent from "../../dateTimePicker";
import { HandleInputChange } from "../../../utils/action";
import { adjustDateTimeForTimezone } from "../../../utils/core";
import { useEffect } from "react";

export default function Sleep({ data, setData, translate }) {
  useEffect(() => {
    setData({ ...data, actionType: 1 });
  }, []);

  const storeLanguage = localStorage.getItem("language");
  return (
    <Grid2 container={true} spacing={2}>
      <Grid2 item="true" size={{ xs: 12 }}>
        <DateTimePickerComponent
          ampm={storeLanguage == "en" ? true : false}
          value={
            data?.start_date
              ? adjustDateTimeForTimezone(data?.start_date)
              : null
          }
          label={translate("data-hour-start")}
          format="DD/MM/YYYY HH:mm"
          name="start_date"
          onChange={(value) => {
            HandleInputChange(
              "start_date",
              new Date(value.toString()),
              data,
              setData
            );
          }}
        />
      </Grid2>
      <Grid2 item="true" size={{ xs: 12 }}>
        <DateTimePickerComponent
          ampm={storeLanguage == "en" ? true : false}
          value={
            data?.end_date ? adjustDateTimeForTimezone(data?.end_date) : null
          }
          label={translate("data-hour-end")}
          format="DD/MM/YYYY HH:mm"
          name="end_date"
          onChange={(value) => {
            HandleInputChange(
              "end_date",
              new Date(value.toString()),
              data,
              setData
            );
          }}
        />
      </Grid2>
      <Grid2 item="true" size={{ xs: 12 }}>
        <TextField
          rows={6}
          multiline={true}
          value={data?.observation}
          fullWidth
          label={translate("observation")}
          onChange={(event) => {
            HandleInputChange("observation", event.target.value, data, setData);
          }}
        />
      </Grid2>
    </Grid2>
  );
}
