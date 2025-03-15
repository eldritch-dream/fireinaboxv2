import React from "react";
import { Card, Typography, Box, CardContent } from "@mui/material";
import ReactPlayer from "react-player";

function ComingSoon() {
  return (
    <div>
{/* Trailer Section */}
<Box id="trailer" textAlign="center" mt={4}>
    <Typography variant="h5" align="center" gutterBottom>
      Check out our new product coming soon!
    </Typography>
    <Typography variant="body1">
      Watch our CEO showing off our brand new product available for purchase soon!
    </Typography>
    <Card>
      <CardContent align="center">
        <ReactPlayer url="https://www.youtube.com/embed/IvLV_M1UOMI" controls={true} playing={false} muted={false} />
      </CardContent>
    </Card>
  </Box>
    </div>
    
  );
}

export default ComingSoon;