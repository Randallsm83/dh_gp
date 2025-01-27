import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Your Dashboard
      </Typography>
      <Typography variant="body1">
        Select an option from the menu to get started.
      </Typography>
    </Box>
  );
}
