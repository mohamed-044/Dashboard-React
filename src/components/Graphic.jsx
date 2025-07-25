import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

export default function Graphic() {
  return (
    <Box>
      <Typography variant="h6" sx={{ m: 3 }}>
        Graphique (avec @mui/x-charts)
      </Typography>
      <Box sx={{ display: "inline-block" }}>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              color: "#4db6ac",
            },
          ]}
          height={300}
          width={600}
        />
      </Box>
    </Box>
  );
}
