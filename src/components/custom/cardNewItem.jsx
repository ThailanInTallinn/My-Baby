import { Box, Card, Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function CardNewItem({
  title,
  actionType,
  Icon,
  color,
  translate,
}) {
  const navigate = useNavigate();

  return (
    <Card sx={{ overflow: "visible", borderRadius: "10%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Icon sx={{ color: color, marginTop: ".2em", fontSize: "3em" }} />
      </Box>
      <Typography
        sx={{
          fontSize: ".85em",
          marginTop: "0.5em",
          fontWeight: "700",
          textAlign: "center",
          wordWrap: "break-word",
        }}
      >
        {translate(title)}
      </Typography>
      <Typography
        sx={{
          marginTop: "0.5em",
          fontSize: "0.8em",
          fontWeight: "400",
          color: "#8f8f8f",
          textAlign: "center",
        }}
      >
        {translate("add-something")}
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Fab
          size="small"
          sx={{
            color: color,
            backgroundColor: "#fff",
            position: "relative",
            bottom: "-20px",
          }}
          onClick={() => {
            navigate(`new/${actionType}`);
          }}
        >
          <AddIcon />
        </Fab>
      </Box>
    </Card>
  );
}
