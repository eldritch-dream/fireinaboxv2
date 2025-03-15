import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import ComingSoon from "./ComingSoon";

function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              FireInABox.co "We leave the m off to save you money!"
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About Us
            </Button>
            <Button color="inherit" component={Link} to="/comingsoon">
              Coming Soon!
            </Button>
          </Toolbar>
        </AppBar>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>

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
          <Typography variant="body2">&copy; 2025 FireInABox.co. All rights reserved.</Typography>
          <Typography variant="body2">
            Contact us at{" "}
            <a href="mailto:info@fireinabox.co" style={{ color: "white" }}>
              info@fireinabox.co
            </a>
          </Typography>
        </Box>
      </div>
    </Router>
  );
}

export default App;
