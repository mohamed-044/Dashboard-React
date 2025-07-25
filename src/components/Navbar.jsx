import { AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import AccountCircleIconUsage from "../assets/icons/AccountCircleIcon.jsx";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tableau de bord
        </Typography>
        <AccountCircleIconUsage />
      </Toolbar>
    </AppBar>
  );
}
