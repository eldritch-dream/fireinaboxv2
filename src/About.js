import React from "react";
import { Container, Typography, Box } from "@mui/material";

function About() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Box>
        <Typography variant="body1">
          Welcome to FireInABox.co! Our mission is to make fire-starting simple, safe, and accessible for everyone.
        </Typography>
        <Typography variant="body1">
          Founded in 2025, we specialize in premium pre-made fire kits for outdoor enthusiasts, families, and anyone who loves a cozy fire moment. Our kits are thoughtfully designed to save you time and effort while delivering the perfect fire experience.
        </Typography>
        <Typography variant="body1">
          We pride ourselves on sustainability and use eco-friendly materials wherever possible. Thank you for supporting our small business!
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
