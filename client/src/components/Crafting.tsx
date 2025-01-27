import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Crafting() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Crafting
      </Typography>
      <Typography variant="body1">
        Manage your crafting activities and recipes here.
      </Typography>
    </Box>
  );
}
