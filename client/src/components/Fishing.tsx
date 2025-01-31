import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Fishing() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Fishing
      </Typography>
      <Typography variant="body1">
        Ocean Fishing, Scrips farm, Fishing log
      </Typography>
    </Box>
  );
}