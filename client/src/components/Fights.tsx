import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Fights() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Fights
      </Typography>
      <Typography variant="body1">
        View and manage your combat activities here.
      </Typography>
    </Box>
  );
}
