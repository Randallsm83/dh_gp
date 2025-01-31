import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Discord() {
  return (
    <Box sx={{ p: 3 }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Discord
    </Typography>
    <Typography variant="body1">
      All the relevant Discord channels.
    </Typography>
  </Box>
  );
}