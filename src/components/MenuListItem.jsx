import styled from "@emotion/styled";
import { red } from "@mui/material/colors";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { icons } from "../dataIcon";

const MenuListItem = () => {
  const navigate = useNavigate();
  const iconStyle = {
    color: "white",
    "& .MuiSvgIcon-root": { color: "white" },
    "&:hover .MuiSvgIcon-root": { color: "red" },
    "&:hover": { color: "red" },
  };
  return (
    <div>
      <List>
        {icons?.map((item, index) => (
          <ListItem key={index} disablePadding>
            {item.url.includes("htpp") && (
              <ListItemButton sx={iconStyle} style to={item.url}>
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            )}
            {!item.url.includes("htpp") && (
              <ListItemButton onClick={() => navigate(item.url)} sx={iconStyle}>
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItem;
