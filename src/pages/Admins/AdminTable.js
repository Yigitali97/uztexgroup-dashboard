import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BasicModal from "../../components/Modal";

export default function AdminTable({data, isLoading, refetch}) {


  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Adminlar
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
          <TableCell />

            <TableCell>Ismi</TableCell>
            <TableCell>Familyasi</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading && !!data && data.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">
                <BasicModal data={row} refetch={refetch} />
              </TableCell>
              <TableCell >{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell align="right">
                <Button variant="outlined">
                  <DeleteForeverIcon color="error" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
