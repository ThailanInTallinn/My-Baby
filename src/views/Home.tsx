import { Button } from "@mui/material";
import { useAppContext } from "../Context";
import styles from "./Home.module.css";

export default function Home() {
  const { showSnackMessage, showAlertMessage } = useAppContext();

  return <div className={styles.outerContainer}></div>;
}
