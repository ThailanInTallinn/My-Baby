import { useAppContext } from "../../../Context";
import { Grid2, TextField, Button } from "@mui/material";
import DateTimePickerComponent from "../../dateTimePicker";
import { HandleInputChange, selectType } from "../../../utils/action";
import { adjustDateTimeForTimezone } from "../../../utils/core";
import { useEffect } from "react";

export default function Eat({ data, setData, translate }) {
  useEffect(() => {
    setData({ ...data, actionType: 2 });
  }, []);
  const storeLanguage = localStorage.getItem("language");

  const selectSide = (side) => {
    setData({ ...data, side });
  };

  return (
    <Grid2 container={true} spacing={2}>
      <Grid2 container={true} size="grow" spacing={3}>
        <Grid2 size="grow">
          <Button
            sx={{ width: "180px" }}
            onClick={() => {
              selectType(1, data, setData);
            }}
            color={data.type == 1 ? "secondary" : "primary"}
            variant="contained"
          >
            {translate("eat-bottle")}
          </Button>
        </Grid2>
        <Grid2 size="grow">
          <Button
            sx={{ width: "180px" }}
            onClick={() => {
              selectType(2, data, setData);
            }}
            color={data.type == 2 ? "secondary" : "primary"}
            variant="contained"
          >
            {translate("eat-bosom")}
          </Button>
        </Grid2>
      </Grid2>
      <Grid2 item="true" size={{ xs: 12 }}>
        <DateTimePickerComponent
          ampm={storeLanguage == "en" ? true : false}
          value={
            data?.start_date
              ? adjustDateTimeForTimezone(data?.start_date)
              : null
          }
          label={
            data.type == 1
              ? translate("data-hour")
              : translate("data-hour-start")
          }
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
      {data.type == 1 ? (
        <Grid2 item="true" size={{ xs: 12 }}>
          <TextField
            value={data?.quantity}
            type="number"
            fullWidth
            label={translate("quantity") + " (ml)"}
            onChange={(event) => {
              HandleInputChange("quantity", event.target.value, data, setData);
            }}
          />
        </Grid2>
      ) : (
        <Grid2 container={true} size="grow" spacing={3}>
          <Grid2 size="grow">
            <Button
              sx={{ width: "120px" }}
              onClick={() => {
                selectSide(1);
              }}
              color={data.side == 1 ? "secondary" : "primary"}
              variant="contained"
            >
              {translate("left")}
            </Button>
          </Grid2>
          <Grid2 size="grow">
            <Button
              sx={{ width: "120px" }}
              onClick={() => {
                selectSide(2);
              }}
              color={data.side == 2 ? "secondary" : "primary"}
              variant="contained"
            >
              {translate("right")}
            </Button>
          </Grid2>
          <Grid2 size="grow">
            <Button
              sx={{ width: "120px" }}
              onClick={() => {
                selectSide(3);
              }}
              color={data.side == 2 ? "secondary" : "primary"}
              variant="contained"
            >
              {translate("both")}
            </Button>
          </Grid2>
        </Grid2>
      )}
      {data.type == 2 ? (
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
      ) : null}
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
