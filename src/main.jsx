import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CardUsage from "./components/Card.jsx";
import theme from "./theme/Theme.jsx";
import Navbar from "./components/Navbar.jsx";
import Graphic from "./components/Graphic.jsx";
import Tables from "./components/Tables.jsx";
import IconDrawer from "./components/Drawer.jsx";
import Box from "@mui/material/Box";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <IconDrawer />
        <Box >
          <Navbar />
          <CardUsage />
          <Graphic />
          <Tables />
        </Box>
      </Box>
    </ThemeProvider>
  </StrictMode>
);