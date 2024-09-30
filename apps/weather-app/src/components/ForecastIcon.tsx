import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import IconLookup from '../app/icons/IconLookup';

export default function ForecastIcon({
  iconName,
  sx,
}: {
  iconName: string;
  sx?: any;
}) {
  const dims = { xs: 100, sm: 150, md: 100, lg: 150 };
  return (
    <Box
      className="ForecastIcon utilCenter"
      sx={{ height: dims, width: dims, ...sx }}
    >
      <IconLookup iconName={iconName} />
    </Box>
  );
}
