import React from "react";
import { Box, Typography, Paper, List, ListItem, ListItemText, Button } from "@mui/material";

const ReviewsPage = () => {
  const reviews = [
    { user: "Alice", review: "Great experience, will work here again!" },
    { user: "Bob", review: "Fantastic platform with easy job posting features." },
    { user: "Charlie", review: "A bit complicated to use, but overall helpful." },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 4 }}>
        User Reviews
      </Typography>

      <Paper sx={{ padding: 3 }}>
        <List>
          {reviews.map((review, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${review.user}:`} secondary={review.review} />
            </ListItem>
          ))}
        </List>

        <Button variant="contained" sx={{ marginTop: 3 }} onClick={() => alert("Add Review")}>
          Add Review
        </Button>
      </Paper>
    </Box>
  );
};

export default ReviewsPage;
