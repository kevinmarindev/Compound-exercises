import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  date: Date | string ,
  weight: number,
  reps: number,
  sets: number,
) {
  return { date, weight, reps, sets};
}

const rows = [
  createData(new Date(), 159, 6.0, 24),
  createData(new Date(Date.now()), 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];
// &nbsp;
export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">Reps</TableCell>
            <TableCell align="right">Sets</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.sets}
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
              <TableCell component="th" scope="row">
                {row.date.toLocaleString()}
              </TableCell>
              <TableCell align="right">{row.weight}</TableCell>
              <TableCell align="right">{row.reps}</TableCell>
              <TableCell align="right">{row.sets}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}