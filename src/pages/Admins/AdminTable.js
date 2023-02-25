import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function AdminTable({data, isLoading}) {


  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Adminlar
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Ismi</TableCell>
            <TableCell>Familyasi</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading && !!data && data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell align="right">
                <Button variant="outlined">
                  <MoreVertIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
