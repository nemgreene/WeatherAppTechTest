import { Box } from '@mui/material';
import React from 'react';
import { LocationInterface } from '../app/common/utilities';

export default function FallbackDash({
  location,
}: {
  location: LocationInterface;
}) {
  return (
    <Box sx={{ width: '100%', p: 12 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>Fallback</Box>
    </Box>
  );
}
