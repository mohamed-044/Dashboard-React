import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import GridViewIconUsage from "../assets/icons/GridView";
import HomeIconUsage from "../assets/icons/HomeIcon";
import GroupIconUsage from "../assets/icons/GroupIcon";
import AddIconUsage from "../assets/icons/AddIcon";
import EqualizerIconUsage from "../assets/icons/EqualizerIcon";
import SettingsIconUsage from "../assets/icons/SettingsIcon";

const drawerWidth = 80;

export default function IconDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding sx={{ justifyContent: "center" }}>
              <ListItemButton sx={{ justifyContent: "center" }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <HomeIconUsage />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ justifyContent: "center" }}>
              <ListItemButton sx={{ justifyContent: "center" }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <GridViewIconUsage />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ justifyContent: "center" }}>
              <ListItemButton sx={{ justifyContent: "center" }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <AddIconUsage />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ justifyContent: "center" }}>
              <ListItemButton sx={{ justifyContent: "center" }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <GroupIconUsage size="medium"/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ justifyContent: "center" }}>
              <ListItemButton sx={{ justifyContent: "center" }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <EqualizerIconUsage />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ justifyContent: "center" }}>
              <ListItemButton sx={{ justifyContent: "center" }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <SettingsIconUsage />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
