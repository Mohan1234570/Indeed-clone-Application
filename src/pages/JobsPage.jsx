import React from "react";
import { Box, Typography, Button, Paper, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const JobsPage = () => {
  const navigate = useNavigate();

  const jobs = [
    { title: "Software Engineer", company: "TechCorp", location: "New York" },
    { title: "Product Manager", company: "InnovateX", location: "San Francisco" },
    { title: "Data Scientist", company: "DataNexus", location: "Austin" },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 4 }}>
        Job Listings
      </Typography>
      
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: 4 }}
        onClick={() => navigate("/create-job")}
      >
        Post a New Job
      </Button>
      
      <Grid container spacing={2}>
        {jobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">{job.title}</Typography>
              <Typography variant="body2">{job.company}</Typography>
              <Typography variant="body2" color="textSecondary">{job.location}</Typography>
              <Button variant="outlined" sx={{ marginTop: 2 }} fullWidth>
                View Details
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default JobsPage;
