import {
  React,
 } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid2,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import ReactPlayer from 'react-player';

function App() {
  const fireKits = [
    {
      title: "Standard Fire Kit",
      description: "Includes everything you need for a perfect fire. Compact and easy to use.",
      price: "$49.99",
      image: "./box.jpg",
    },
    {
      title: "Subscribe and Save!",
      description: "Get our standard fire kit regularly with your subscription.",
      price: "$44.99",
      image: "./box.jpg",
    },
    {
      title: "Premium Fire Kit",
      description: "Top-of-the-line kit for the ultimate fire enthusiast.",
      price: "$54.99",
      image: "./box.jpg",
    },
    {
      title: "Holiday Special Fire Kit",
      description: "Start a new holiday tradition with this equisite offering. Now includes your choice of fire color packet!",
      price: "$59.99",
      image: "./box.jpg",
    }
  ];

  return (
    <div>
      {/* Header */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            FireInABox.co "We leave the m off to save you money!"
          </Typography>
          <Button color="inherit">Shop Now</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 4 }}>
        {/* Welcome Section */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" gutterBottom>
            Welcome to FireInABox.co
          </Typography>
          <Typography variant="body1">
          Discover the convenience and beauty of our artisan-crafted, high-quality pre-made fire kits. Perfect for your next outdoor adventure or cozy indoor fireplace moment.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
            href="#products"
          >
            Shop Now
          </Button>
        </Box>

        {/* Trailer Section */}
        <Box id="trailer" textAlign="center" mt={4}>
          <Typography variant="h5" align="center" gutterBottom>
              Watch Our Trailer
          </Typography>
          <Typography variant="body1">
            See the magic of our fire kits in action!
          </Typography>
          <Card>
            <CardContent align="center">
              <ReactPlayer
                url="https://www.youtube.com/embed/AT6CO5I8nrI"
                controls={true}
                playing={false}
                muted={false}
              />
            </CardContent>
          </Card>
        </Box>

        {/* Products Section */}
        <Box id="products" mt={4}>
          <Typography variant="h5" align="center" gutterBottom>
            Our Fire Kits
          </Typography>
          <Grid2 container spacing={4}>
            {fireKits.map((kit, index) => (
              <Grid2 item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={kit.image}
                    alt={kit.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{kit.title}</Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {kit.description}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {kit.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 2,
          mt: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          &copy; 2025 FireInABox.co. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Contact us at <a href="mailto:info@fireinabox.co" style={{ color: "white" }}>info@fireinabox.co</a>
        </Typography>
      </Box>
    </div>
  );
}

export default App;
