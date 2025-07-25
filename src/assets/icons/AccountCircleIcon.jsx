import PersonIcon from "@mui/icons-material/Person";
import { Box } from "@mui/material";

export default function AccountCircleIconUsage() {
  return (
    <Box
      sx={{
        backgroundColor: "#b4aeaeff",
        borderRadius: "50%",
        width: 45,
        height: 45,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PersonIcon fontSize="large" sx={{ color: "white" }} />
    </Box>
  );
}
