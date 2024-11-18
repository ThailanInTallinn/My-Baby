import { Button } from "@mui/material";
import { useAppContext } from "../Context";

export default function Home() {
  const { showSnackMessage, showAlertMessage } = useAppContext();

  return "Home";
}
