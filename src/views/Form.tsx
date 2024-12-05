import { useNavigate, useParams } from "react-router-dom";
import Sleep from "../components/custom/actions/sleep";
import Eat from "../components/custom/actions/eat";
import Diaper from "../components/custom/actions/diaper";
import { useEffect, useState } from "react";
import { useAppContext } from "../Context";
import Button from "@mui/material/Button";
import { Grid2 } from "@mui/material";
import { get, remove, save, update } from "../services/database";
import AppBar from "../components/custom/appbar";

export default function Form() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { translate, showAlertMessage } = useAppContext();
  const id = params.id;
  const navigate = useNavigate();

  const getActionType = () => {
    switch (params.type) {
      case "1":
        return "sleep";
      case "2":
        return "eat";
      case "3":
        return "diaper";
      default:
        return "eat";
    }
  };

  getActionType();
  const getParamType = () => {
    switch (params.type) {
      case "1":
        return <Sleep data={data} setData={setData} translate={translate} />;
      case "2":
        return <Eat data={data} setData={setData} translate={translate} />;
      case "3":
        return <Diaper data={data} setData={setData} translate={translate} />;
      default:
        return <Eat data={data} setData={setData} translate={translate} />;
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
    <>
      <AppBar
        title={translate(getActionType())}
        id={id}
        _delete={() => {
          const _confirm = confirm(translate("deletion-modal"));
          if (_confirm) {
            remove(id);
            showAlertMessage(translate("deletion-done"));
            setTimeout(() => {
              navigate("/");
            }, 4000);
          } else {
          }
        }}
      />

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
          {getParamType()}
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              if (id) {
                update(data, id);
                showAlertMessage(translate("form-updated"), "success");
                setTimeout(() => {
                  navigate("/");
                }, 4000);
              } else {
                save(data);
                showAlertMessage(translate("form-saved"), "success");
                setTimeout(() => {
                  navigate("/");
                }, 4000);
              }
            }}
          >
            {translate("save")}
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
}
