import React from "react";
import mainLogo from "../../assets/Images/Misc/main.svg";
import drawerLogo from "../../assets/Images/Misc/drawerLogo.svg";
import mobLogo from "../../assets/Images/Misc/mobLogo.svg";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end", // Aligns content to the end (right)
    alignItems: "flex-start", // Aligns content to the start (top)
    flexGrow: 1,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function BlackHeaderBar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <></> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <></> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return isSmallScreen ? (
    <Stack
      direction="row"
      spacing={2}
      pt={2}
      style={{ justifyContent: "space-between" }}
    >
      <IconButton>
        <img src={mobLogo} alt="Home" />
      </IconButton>
      <div className={classes.searchContainer}>
        <TextField
          id="input-with-sx"
          label="How can we be in service?"
          variant="standard"
          style={{ width: 180 }}
          InputProps={{
            sx: {
              color: "black",
              "& .MuiInputBase-root": {
                color: "black", // To change input text color
              },
            },
          }}
          InputLabelProps={{
            style: {
              color: "black",
              fontSize: "14px",
            },
          }}
        />
      </div>
      <div>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon style={{ color: "black" }} />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </Stack>
  ) : (
    <Stack direction={"row"} spacing={2} pr={5} pt={5} pl={5}>
      <div>
        <IconButton>
          <img src={mainLogo} alt="Home" />
        </IconButton>
      </div>
      <div className={classes.center}>
        <SearchIcon
          sx={{ transform: "translate(-10px, 10px)" }}
          style={{ color: "black" }}
        />
        <TextField
          id="input-with-sx"
          label="How can we be in service?"
          variant="standard"
          style={{ width: 630 }}
          sx={{
            border: "none",
            "& .MuiTextField-root": {
              color: "black",
            },
          }}
          InputLabelProps={{
            style: {
              color: "black",
            },
          }}
        />
      </div>
      <div className={classes.root}>
        <IconButton onClick={toggleDrawer(true)}>
          <img src={drawerLogo} alt="Icon" />
        </IconButton>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Stack>
  );
}
