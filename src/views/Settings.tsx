import { useAppContext } from "../Context";

import { Button, Grid2, TextField } from "@mui/material";

import AppBar from "../components/custom/appbar";
import { useEffect, useState } from "react";
import { DatePickerComponent } from "../components";
import { adjustDateTimeForTimezone } from "../utils/core";
import { HandleInputChange } from "../utils/action";

export default function Settings() {
  const { translate } = useAppContext();
  const [data, setData] = useState(null);

  const loadDataBase = () => {
    const currentData = localStorage.getItem("babyData");
    if (currentData) {
      setData(JSON.parse(currentData)[0]);
    } else {
      JSON.stringify(localStorage.setItem("babyData", []));
    }
  };

  const save = () => {
    localStorage.setItem("babyData", JSON.stringify([data]));
  };

  const update = () => {};

  useEffect(() => {
    loadDataBase();
  }, []);

  return (
    <>
      <AppBar title={translate("settings")} />

      <Grid2
        container={true}
        spacing={2}
        sx={{ padding: "1em", height: "100vh" }}
      >
        <Grid2
          item="true"
          size={{ xs: 12 }}
          sx={{ backgroundColor: "#f7f7f7" }}
        >
          <TextField
            label={translate("name")}
            fullWidth
            value={data?.name}
            onChange={(event) => {
              HandleInputChange("name", event?.target.value, data, setData);
            }}
          />
          <DatePickerComponent
            label={translate("birth")}
            value={
              data?.birth_date
                ? adjustDateTimeForTimezone(data?.birth_date)
                : null
            }
            format="DD/MM/YYYY"
            onChange={(value) => {
              HandleInputChange(
                "birth_date",
                new Date(value.toString()),
                data,
                setData
              );
            }}
          />
          <TextField
            label={translate("weight")}
            fullWidth
            sx={{ marginTop: "1rem" }}
            value={data?.weight}
            type="number"
            onChange={(event) => {
              HandleInputChange("weight", event.target.value, data, setData);
            }}
          />
          <TextField
            label={translate("height")}
            fullWidth
            sx={{ marginTop: "1rem" }}
            value={data?.height}
            type="number"
            onChange={(event) => {
              HandleInputChange("height", event.target.value, data, setData);
            }}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 1 }}
            onClick={() => {
              save();
            }}
          >
            {translate("save")}
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
}
