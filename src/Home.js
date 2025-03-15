import React from "react";
import {
    Typography,
    Button,
    Container,
    Grid2,
    Card,
    CardContent,
    CardMedia,
    Box,
    Avatar,
  } from "@mui/material";
  import ReactPlayer from "react-player";


function Home(){
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
          description: "Start a new holiday tradition with this exquisite offering. Now includes your choice of fire color packet!",
          price: "$59.99",
          image: "./box.jpg",
        },
      ];
    
      const testimonials = [
        {
          name: "Jane Doe",
          message: "I loved the convenience of the Standard Fire Kit. It made my camping trip so much easier!",
          avatar: "./jane.jpg",
          productImage: "./fire.jpg",
        },
        {
          name: "John Smith",
          message: "The Holiday Special Fire Kit added magic to our family gathering. Highly recommend it!",
          avatar: "./john.jpg",
          productImage: "./fire.jpg",
        },
        {
          name: "Emily Davis",
          message: "Premium Fire Kit is a game changer. The quality is outstanding, and it’s worth every penny.",
          avatar: "./emily.jpg",
          productImage: "./fire.jpg",
        },
      ];

    return (
<div>
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
          <Button variant="contained" color="secondary" sx={{ mt: 2 }} href="#products">
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
              <ReactPlayer url="https://www.youtube.com/embed/AT6CO5I8nrI" controls={true} playing={false} muted={false} />
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
                  <CardMedia component="img" height="140" image={kit.image} alt={kit.title} />
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

      {/* Testimonials Section */}
      <Box id="testimonials" mt={6} py={4} bgcolor="#f5f5f5">
        <Container>
          <Typography variant="h5" align="center" gutterBottom>
            Testimonials
          </Typography>
          <Typography variant="body1" align="center" mb={4}>
            See what our customers have to say about our fire kits!
          </Typography>
          <Grid2 container spacing={1}>
            {testimonials.map((testimonial, index) => (
              <Grid2 item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent align="center">
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ width: 80, height: 80, margin: "0 auto 16px" }}
                    />
                    <Typography variant="h6">{testimonial.name}</Typography>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      {testimonial.message}
                    </Typography>
                    <CardMedia
                      component="img"
                      height="140"
                      image={testimonial.productImage}
                      alt={`Product used by ${testimonial.name}`}
                      sx={{ borderRadius: "8px" }}
                    />
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
    </div>
    );

}

export default Home;
