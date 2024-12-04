import Crib from "@mui/icons-material/Crib";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import CribIcon from "@mui/icons-material/Crib";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import SpaIcon from "@mui/icons-material/Spa";
import { useAppContext } from "../../Context";

export default function CustomList({ items, ...props }) {
  const theme = useTheme();
  const { translate } = useAppContext();
  const typesString = {
    1: "sleep",
    2: "eat",
    3: "diaper",
  };

  const typesColor = {
    1: "#4b10a9",
    2: "#47c869",
    3: "#f4cc1d",
  };

  const subtitleSleep = (item) => {
    return "Dormindo";
  };

  const subtitleEat = (item) => {
    return "Comendo";
  };

  const subtitleDiaper = (item) => {
    return "Cagando";
  };

  const generateSubtitle = (item) => {
    switch (item.actionType) {
      case 1:
        return subtitleSleep(item);
      case 2:
        return subtitleEat(item);
      case 3:
        return subtitleDiaper(item);
      default:
        return subtitleEat(item);
    }
  };

  const getIcon = (actionType) => {
    switch (actionType) {
      case 1:
        return <CribIcon />;
      case 2:
        return <RestaurantMenuIcon />;
      case 3:
        return <SpaIcon />;
      default:
        return <RestaurantMenuIcon />;
    }
  };

  return (
    <List
      {...props}
      sx={{
        ...props.sx,
        paddingLeft: "1em",
        paddingRight: "1em",
      }}
    >
      {items.map((item, index) => {
        return (
          <ListItem
            key={index}
            sx={{
              backgroundColor: theme.palette.common.white,
              borderRadius: "60px",
              marginTop: "1em",
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: typesColor[item.actionType] }}>
                {getIcon(item.actionType)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={translate(typesString[item.actionType])}
              secondary={generateSubtitle(item)}
              sx={{ color: "black" }}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
