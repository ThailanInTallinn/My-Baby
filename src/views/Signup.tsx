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
  const { showSnackMessage, showAlertMessage } = useAppContext();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState([]);

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

  const verifyRegister = () => {
    let dataBase = JSON.parse(localStorage.getItem("credentials"));

    const emailValidation = validateEmail(data.email.value);

    if (!dataBase) {
      localStorage.setItem("credentials", JSON.stringify([]));
      dataBase = JSON.parse(localStorage.getItem("credentials"));
    }

    setData((data) => ({
      ...data,
      email: {
        value: data.email.value,
        error: emailValidation.error,
        helperText: emailValidation.helperText,
      },
    }));

    if (emailValidation.error == true) {
      return;
    }

    const isExistingEmail = dataBase.map((item) => {
      console.log(item.email.value == data.email.value);
      return item.email.value == data.email.value;
    });

    if (isExistingEmail == true) {
      showAlertMessage("Usuário já cadastrado.", "error");
      return;
    }

    if (data.password.value != data.confirmPassword.value) {
      showAlertMessage("As senhas não coincidem", "error");
      return;
    }

    dataBase.push(data);
    localStorage.setItem("credentials", JSON.stringify(dataBase));

    setData((current) => ({
      ...current,
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
    }));
    navigate("/signin");
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
            marginTop: 2,
          }}
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
        <Button
          onClick={() => {
            verifyRegister();
          }}
          size="large"
        >
          <span style={styles.buttonText}>Registrar</span>
        </Button>
      </Grid2>
    </ContainerComponent>
  );
}

const styles = {
  centerBox: {
    marginTop: 4,
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
