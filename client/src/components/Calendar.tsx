import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Calendar() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Calendar
      </Typography>
      <Typography variant="body1">
        View and manage your schedule here.
      </Typography>
    </Box>
  );
}
