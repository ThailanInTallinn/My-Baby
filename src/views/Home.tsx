import { Button, Typography } from "@mui/material";
import { useAppContext } from "../Context";
import styles from "./Home.module.css";
import DatePickerComponent from "../components/datePicker";

export default function Home() {
  return (
    <div className={styles.outerContainer}>
      <DatePickerComponent />
    </div>
  );
}
