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
import { validateEmail } from "../utils/validators";

export default function SignUp() {
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

    confirmPassword: {
      value: "",
      error: null,
      helperText: null,
    },
  });

  const verifyRegister = async () => {
    const emailValidation = validateEmail(data.email.value);

    setData((data) => ({
      ...data,
      email: {
        value: data.email.value,
        error: emailValidation.error,
        helperText: emailValidation.helperText,
      },
    }));
    if (data.password.value != data.confirmPassword.value) {
      showAlertMessage("As senhas não coincidem", "warning");
      return;
    }

    let { data: response, error } = await signIn(
      data.email.value,
      data.password.value,
      supabase
    );
  };

  return (
    <ContainerComponent
      size={{ xs: 12 }}
      sx={{ height: "100vh", width: "100vw" }}
    >
      <Grid2 item="true" size={{ xs: 12 }} sx={styles.centerBox}>
        <Avatar
          sx={{ width: 180, height: 180, border: "2px solid black" }}
          src={logo}
        />
      </Grid2>
      <Grid2
        item="true"
        size={{ xs: 12 }}
        sx={{ ...styles.centerBox, color: "black", marginTop: 4 }}
      >
        <Typography variant="h3">Cadastre-se</Typography>
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
          helperText={data.email.helperText}
          error={data.email.error}
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
        <TextField
          label="Confirmar senha"
          value={data.confirmPassword.value}
          fullWidth={true}
          type="password"
          onChange={(event) => {
            handleChange(data, setData, event.target.value, "confirmPassword");
          }}
        />
      </Grid2>

      <Grid2 item="true" size={{ xs: 12 }} sx={styles.centerBox}>
        <Link to={"/signin"}>Já possui uma conta? Faça login</Link>
      </Grid2>
      <Grid2
        item="true"
        size={{ xs: 12 }}
        sx={{ ...styles.centerBox, ...styles.registerButton }}
      >
        <Button onClick={verifyRegister} size="large">
          <span style={styles.buttonText}>Registrar</span>
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

  registerButton: {
    backgroundColor: "black",
    borderRadius: "8px",
  },

  buttonText: {
    color: "white",
  },
};
