import { useAppContext } from "../../../Context";
import { Grid2, TextField, Button } from "@mui/material";
import DateTimePickerComponent from "../../dateTimePicker";
import { HandleInputChange, selectType } from "../../../utils/action";
import { adjustDateTimeForTimezone } from "../../../utils/core";
import { useEffect } from "react";

export default function Diaper({ data, setData, translate }) {
  useEffect(() => {
    setData({ ...data, actionType: 3 });
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
      <Grid2 container={true} size={12} spacing={4}>
        <Button
          onClick={() => {
            selectType(1, data, setData);
          }}
          color={data.type == 1 ? "secondary" : "primary"}
          variant="contained"
        >
          {translate("diaper-wet")}
        </Button>
        <Button
          onClick={() => {
            selectType(2, data, setData);
          }}
          color={data.type == 2 ? "secondary" : "primary"}
          variant="contained"
        >
          {translate("diaper-dirty")}
        </Button>
        <Button
          onClick={() => {
            selectType(3, data, setData);
          }}
          color={data.type == 3 ? "secondary" : "primary"}
          variant="contained"
        >
          {translate("diaper-both")}
        </Button>
        <Button
          onClick={() => {
            selectType(4, data, setData);
          }}
          color={data.type == 4 ? "secondary" : "primary"}
          variant="contained"
        >
          {translate("diaper-clean")}
        </Button>
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
