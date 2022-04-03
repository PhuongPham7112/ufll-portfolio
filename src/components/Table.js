import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  title,
  activities,
  budget
) {
  return { title, activities, budget };
}

const rows = [
  createData('KOLs', 'Influencers (2 macro influencers, 4 medium influencers, 6 micro influencers)', 220),
  createData('Production', 'Teaser', 15),
  createData('Production', 'Music Video (Collaborate with a celebrity)', 200),
  createData('Production', 'TVC', 250),
  createData('Facebook', 'Ads', 100),
  createData('Facebook', 'Story and photo contest', 150),
  createData('POSM', 'Large supermarkets', 200),
  createData('Display', 'Buildings\' elevators (universities, shopping malls, cinemas) & Bus stops', 1000),
  createData('Other Platforms', 'Ads on online shopping platforms (Shopee, Lazada, Tiki), Google Ads', 300),
  createData('Tiktok', 'Viral video contest', 300),
  createData('Expected Expense', '10%', 10)
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, background: '#83b8c7', color: 'white' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="left">Activities</TableCell>
            <TableCell align="left">Budget</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title + row.budget}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">{row.activities}</TableCell>
              <TableCell align="left">{row.budget}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}