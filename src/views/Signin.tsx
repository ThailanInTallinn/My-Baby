import { Button, Container } from "@mui/material";
import { DatePickerComponent, DateTimePickerComponent } from "../components";

export default function SignIn() {
  return (
    <Container>
      <Button variant="outlined">Entrar</Button>
      <DateTimePickerComponent
        format={"DD/MM/YYYY HH:mm"}
        onChange={(value: object) => {
          console.log(value.toString());
        }}
      />
      <DatePickerComponent format={"DD/MM/YYYY"} />
    </Container>
  );
}
