import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function createData(id, name, date, status) {
  return { id, name, date, status };
}

const rows = [
  createData(1, "Nom 1", "24-04-2025", "En cours"),
  createData(2, "Nom 2", "16-04-2025", "Payée"),
  createData(3, "Nom 3", "10-04-2025", "Terminée"),
  createData(4, "Nom 4", "02-04-2025", "Terminée"),
];

export default function Tables() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ m: 3 }}>
        Dernières Commandes
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Nom</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Statut</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
