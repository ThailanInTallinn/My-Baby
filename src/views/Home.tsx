import { Avatar, Box, Grid2, IconButton, Typography } from "@mui/material";
import { CardNewItem } from "../components";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import Baby from "../assets/baby.png";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAppContext } from "../Context";
import { useTheme } from "@mui/material/styles";
import CustomList from "../components/custom/customList";
import { useEffect, useState } from "react";
import { list } from "../services/database";
import { ACTIONS } from "../constants/actions";

export default function Home() {
  const [data, setData] = useState([]);
  const [babyData, setBabyData] = useState([]);
  const navigate = useNavigate();
  const { translate } = useAppContext();
  const theme = useTheme();

  const loadData = () => {
    const d = list();
    if (d) {
      setData(d);
    }
  };

  const loadBabyData = () => {
    const babyData = localStorage.getItem("babyData");
    if (babyData) {
      setBabyData(JSON.parse(babyData)[0]);
    } else {
      setBabyData({
        name: `${translate("default-name")}`,
      });
    }
  };

  useEffect(() => {
    loadData();
    loadBabyData();
  }, []);

  return (
    <Grid2 container={true} sx={{ width: "100vw" }}>
      <Grid2
        item="true"
        size={{ xs: 12 }}
        sx={{
          height: "25vh",
          paddingTop: "1rem",
          backgroundColor: `${theme.palette.secondary.light}`,
        }}
      >
        <Grid2 container={true}>
          <Grid2
            item="true"
            size={{ xs: 4 }}
            sx={{
              ...styles.centerBox,
            }}
          >
            <IconButton
              onClick={() => {
                navigate("/dashboard");
              }}
              sx={{
                ...styles.iconButton,
                border: `2px solid ${theme.palette.primary.dark}`,
              }}
            >
              <SignalCellularAltIcon
                sx={{ ...styles.icon, color: `${theme.palette.primary.dark}` }}
              />
            </IconButton>
            <Box sx={styles.boxText}>
              <Typography sx={{ ...styles.centerText, ...styles.text2 }}>
                {babyData.height ? `${babyData.height} cm` : ` cm`}
              </Typography>
              <Typography sx={{ ...styles.centerText, ...styles.text3 }}>
                {translate("height")}
              </Typography>
            </Box>
          </Grid2>
          <Grid2 item="true" size={{ xs: 4 }} sx={{ ...styles.centerBox }}>
            <Avatar src={Baby} sx={{ width: 90, height: 90 }} />
            <Box sx={styles.boxText}>
              <Typography sx={{ ...styles.centerText, ...styles.text1 }}>
                {babyData.name}
              </Typography>
            </Box>
          </Grid2>
          <Grid2 item="true" size={{ xs: 4 }} sx={{ ...styles.centerBox }}>
            <IconButton
              onClick={() => {
                navigate("/settings");
              }}
              sx={{
                ...styles.iconButton,
                border: `2px solid ${theme.palette.primary.dark}`,
              }}
            >
              <SettingsIcon sx={{ color: `${theme.palette.primary.dark}` }} />
            </IconButton>
            <Box sx={styles.boxText}>
              <Typography sx={{ ...styles.centerText, ...styles.text2 }}>
                {babyData.weight ? `${babyData.weight} kg` : ` kg`}
              </Typography>
              <Typography sx={{ ...styles.centerText, ...styles.text3 }}>
                {translate("weight")}
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2
        item="true"
        size={{ xs: 12 }}
        sx={{ backgroundColor: theme.palette.primary.dark, height: "75vh" }}
      >
        <Grid2
          container={true}
          sx={{
            marginTop: "-50px",
            padding: 2,
          }}
        >
          <Grid2 size={{ xs: 12 }} item="true">
            <Grid2 container={true} spacing={2}>
              {ACTIONS.map((item, index) => {
                return (
                  <Grid2 size={{ xs: 4 }} item="true" key={index}>
                    <CardNewItem {...item} key={index} translate={translate} />
                  </Grid2>
                );
              })}
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 container={true} sx={{ marginTop: "1em" }}>
          <Grid2 size={{ xs: 12 }}>
            <CustomList
              items={data}
              sx={{ overflow: "auto", maxHeight: "56.5vh" }}
            />
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}

const styles = {
  icon: {
    fontSize: "1.5em",
  },

  text1: {
    wordBreak: "break-all",
    fontSize: "1.2em",
    fontWeight: "500",
    fontFamily: '"Lato", sans-serif',
  },

  text2: {
    wordBreak: "break-all",
    fontSize: ".8em",
    fontWeight: "600",
    fontFamily: '"Lato", sans-serif',
  },

  text3: {
    wordBreak: "break-all",
    fontSize: ".8em",
    fontWeight: "400",
  },

  iconButton: {
    height: "2.5em",
    width: "2.5em",
  },

  centerBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  centerText: {
    textAlign: "center",
    color: "black",
  },

  boxText: {
    marginTop: "0.5em",
  },
};
