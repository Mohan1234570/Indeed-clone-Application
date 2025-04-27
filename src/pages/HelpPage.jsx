import React from "react";
import { Box, Typography, Paper, List, ListItem, ListItemText, Button } from "@mui/material";

const HelpPage = () => {
  const faqs = [
    { question: "How to post a job?", answer: "Click on 'Post a job' button in the homepage." },
    { question: "How to edit my profile?", answer: "Go to 'Profile' page and click on 'Edit Profile'." },
    { question: "How to contact support?", answer: "Reach us at support@example.com." },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 4 }}>
        Help & Support
      </Typography>

      <Paper sx={{ padding: 3 }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Frequently Asked Questions
        </Typography>

        <List>
          {faqs.map((faq, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={faq.question}
                secondary={faq.answer}
              />
            </ListItem>
          ))}
        </List>

        <Button variant="contained" sx={{ marginTop: 3 }}>
          Contact Support
        </Button>
      </Paper>
    </Box>
  );
};

export default HelpPage;
