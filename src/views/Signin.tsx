import {
  Avatar,
  Button,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import {
  ContainerComponent,
  DatePickerComponent,
  DateTimePickerComponent,
} from "../components";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../services/authentication";
import { useState } from "react";
import { useAppContext } from "../Context";
import { handleChange } from "../utils/core";

export default function SignIn() {
  const { supabase, showSnackMessage, showAlertMessage } = useAppContext();
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: {
      value: "",
      error: null,
      helperText: null,
    },

    password: {
      value: "",
      error: null,
      helperText: null,
    },
  });

  const verifyLogin = async () => {
    let { data: response, error } = await signIn(
      data.email.value,
      data.password.value,
      supabase
    );

    if (error && error.message == "Invalid login credentials") {
      showSnackMessage("Dados de usuário inválidos");
    } else {
      localStorage.setItem("session", JSON.stringify(response.session));
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/");
    }
  };

  return (
    <ContainerComponent
      size={{ xs: 12 }}
      sx={{ height: "100vh", width: "100vw" }}
    >
      <Grid2
        item="true"
        size={{ xs: 12 }}
        sx={{ ...styles.centerBox, marginTop: 0 }}
      >
        <Avatar
          sx={{
            width: 180,
            height: 180,
            border: "2px solid black",
            marginTop: 6,
          }}
          src={logo}
        />
      </Grid2>
      <Grid2
        item="true"
        size={{ xs: 12 }}
        sx={{ ...styles.centerBox, color: "black", marginTop: 4 }}
      >
        <Typography variant="h3">Login</Typography>
      </Grid2>
      <Grid2
        item="true"
        size={{ xs: 12 }}
        sx={{ ...styles.centerBox, color: "black", marginTop: 4 }}
      >
        <Typography variant="h5">Seja bem-vindo</Typography>
      </Grid2>
      <Grid2 item="true" size={{ xs: 12 }} sx={styles.centerBox}>
        <TextField
          label="e-mail"
          value={data.email.value}
          fullWidth={true}
          onChange={(event) =>
            handleChange(data, setData, event.target.value, "email")
          }
        />
      </Grid2>
      <Grid2 item="true" size={{ xs: 12 }} sx={styles.centerBox}>
        <TextField
          label="senha"
          value={data.password.value}
          fullWidth={true}
          type="password"
          onChange={(event) => {
            handleChange(data, setData, event.target.value, "password");
          }}
        />
      </Grid2>
      <Grid2 item="true" size={{ xs: 12 }} sx={styles.centerBox}>
        <Link to={"/signup"}>Cadastrar</Link>
      </Grid2>
      <Grid2 item="true" size={{ xs: 12 }} sx={styles.centerBox}>
        <Button onClick={verifyLogin} size="large">
          Entrar
        </Button>
      </Grid2>
    </ContainerComponent>
  );
}

const styles = {
  centerBox: {
    marginTop: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
