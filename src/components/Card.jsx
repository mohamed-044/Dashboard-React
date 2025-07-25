import { Card, CardContent, Typography, CardHeader, Avatar, Box } from "@mui/material";
import AttachMoneyIconUsage from "../assets/icons/AttachMoneyIcon.jsx";
import MessageIconUsage from "../assets/icons/MessageIcon.jsx";
import GroupIconUsage from "../assets/icons/GroupIcon.jsx";
export default function CardUsage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: "center", gap: 10, margin: 5 }}>
      
      <Card sx={{ width: 600, height:100, display:"flex", alignItems: "center", justifyContent: "left" }}>
        <CardHeader 
          title={<AttachMoneyIconUsage />}
          sx={{ textAlign: 'center' }}
        />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6">1000</Typography>
          <Typography>Ventes</Typography>
        </CardContent>
      </Card>

      <Card sx={{ width: 600, height:100, display:"flex", alignItems: "center", justifyContent: "left" }}>
        <CardHeader 
          title={<GroupIconUsage size = "large"/>}
          sx={{ textAlign: 'center' }}
        />
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography variant="h6">300</Typography>
          <Typography>Clients</Typography>
        </CardContent>
      </Card>

      <Card sx={{ width: 600, height:100, display:"flex", alignItems: "center", justifyContent: "left" }}>
        <CardHeader 
          title={<MessageIconUsage />}
          sx={{ textAlign: 'center' }}
        />
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography variant="h6">5</Typography>
          <Typography>Messages</Typography>
        </CardContent>
      </Card>
      
    </Box>
  );
}
