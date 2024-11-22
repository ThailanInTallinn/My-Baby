import {
  ContainerComponent,
  DatePickerComponent,
  DateTimePickerComponent,
} from "../components";

export default function Home() {
  return (
    <ContainerComponent
      size={{ xs: 12 }}
      sx={{ height: "100vh", width: "100vw" }}
    >
      <span style={{ color: "black" }}>Ola</span>
      <DatePickerComponent />
      <DateTimePickerComponent />
    </ContainerComponent>
  );
}
