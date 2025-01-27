import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Glamour() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Glamour
      </Typography>
      <Typography variant="body1">
        Customize and manage your appearance settings here.
      </Typography>
    </Box>
  );
}
