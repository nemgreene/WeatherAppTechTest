import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import IconLookup from '../app/icons/IconLookup';

export default function ForecastIcon({ iconName }: { iconName: string }) {
  return (
    <Box sx={{ height: '200px', width: '200px' }}>
      <IconLookup iconName="clear-day" />
    </Box>
  );
}
