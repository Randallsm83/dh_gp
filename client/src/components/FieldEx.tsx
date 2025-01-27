import React from 'react';
import { Box, Typography } from '@mui/material';

export default function FieldEx() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Field Exploration
      </Typography>
      <Typography variant="body1">
        Manage your field exploration activities here.
      </Typography>
    </Box>
  );
}
