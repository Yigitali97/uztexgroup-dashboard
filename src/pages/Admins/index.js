import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import AdminTable from "./AdminTable";

const Admins = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <AdminTable />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Admins;
