import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Gathering() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Gathering
      </Typography>
      <Typography variant="body1">
        Manage your gathering activities and resources here.
      </Typography>
    </Box>
  );
}
