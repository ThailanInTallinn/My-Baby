import { useParams } from "react-router-dom";
import Sleep from "../components/custom/actions/sleep";
import Eat from "../components/custom/actions/eat";
import Diaper from "../components/custom/actions/diaper";
import { useEffect, useState } from "react";
import { useAppContext } from "../Context";
import Button from "@mui/material/Button";
import { Grid2 } from "@mui/material";
import { get, save, update } from "../services/database";

export default function Form() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { translate } = useAppContext();
  const id = params.id;

  const getParamType = () => {
    switch (params.type) {
      case "1":
        return <Sleep data={data} setData={setData} translate={translate} />;
      case "2":
        return <Eat data={data} setData={setData} />;
      case "3":
        return <Diaper data={data} setData={setData} />;
      default:
        return <Eat data={data} setData={setData} />;
    }
  };

  const loadData = (id) => {
    if (id) {
      const d = get(id);
      setData(d);
    }
  };

  useEffect(() => {
    if (params && params.id) {
      loadData(params.id);
    }
  }, []);

  return (
    <Grid2
      container={true}
      spacing={2}
      sx={{ padding: "1em", height: "100vh" }}
    >
      <Grid2 item="true" size={{ xs: 12 }} sx={{ backgroundColor: "#f7f7f7" }}>
        {getParamType()}
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => {
            if (id) {
              update(data, id);
            } else {
              save(data);
            }
          }}
        >
          {translate("save")}
        </Button>
      </Grid2>
    </Grid2>
  );
}
