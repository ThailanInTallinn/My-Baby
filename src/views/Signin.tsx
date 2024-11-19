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
  supabase,
} from "../components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <ContainerComponent size={{ xs: 12 }}>
      <Grid2 item="true" size={{ xs: 12 }}>
        <Avatar sx={{ width: 180, height: 180 }} src={logo} />
      </Grid2>
      <Grid2 item="true" size={{ xs: 12 }}>
        <Typography variant="h3">Login</Typography>
      </Grid2>
      <Grid2 item="true" size={{ xs: 12 }}>
        <Typography variant="h5">Seja bem-vindo</Typography>
      </Grid2>
      <Grid2 item="true" size={{ xs: 12 }}>
        <TextField label="e-mail" />
      </Grid2>
      <Grid2 item="true" size={{ xs: 12 }}>
        <TextField label="senha" />
      </Grid2>
      <Grid2 item="true" size={{ xs: 12 }}>
        <Link to={"/signup"}>Cadastrar</Link>
      </Grid2>
      <Grid2 item="true" size={{ xs: 12 }}>
        <Button>Entrar</Button>
      </Grid2>
    </ContainerComponent>
  );
}
