import { Button } from "@mui/material";
import { useContext } from "react";
import { useAppContext } from "../Context";

export default function Home() {
  const { showSnackMessage } = useAppContext();

  showSnackMessage("delicia");

  return "Home";
}
