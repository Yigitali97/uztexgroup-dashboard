import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Companies from "./Companies";
import CreateCompany from "./CreateCompany";
import { API } from "../../services/api";
import { useQuery } from "react-query";

export default function Home() {
  const { data, isLoading, refetch } = useQuery("companies", async () => {
    const response = await API.getAllCompanies();

    return response.data;
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column", mb: 2 }}>
            <CreateCompany refetch={refetch} />
          </Paper>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Companies data={data} isLoading={isLoading} refetch={refetch} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
