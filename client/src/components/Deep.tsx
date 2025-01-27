import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Deep() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Deep
      </Typography>
      <Typography variant="body1">
        Explore deep content and activities here.
      </Typography>
    </Box>
  );
}
