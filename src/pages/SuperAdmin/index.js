import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { API } from "../../services/api";

import AdminTable from "./AdminTable";
import CreateUser from "./CreateAdmin";

const Admins = () => {

  const { data, isLoading, refetch} = useQuery("admins", async () => {
    const response = await API.getAdmins();

    // console.log(response.data);

    return response.data
  });

  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column", mb: 2 }}>
              <CreateUser refetch={refetch} />
            </Paper>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>

            <AdminTable data={data} isLoading={isLoading} refetch={refetch} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Admins;
