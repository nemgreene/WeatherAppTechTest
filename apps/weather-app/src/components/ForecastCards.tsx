import { Box } from '@mui/material';
import React from 'react';
import ForecastCard from './ForecastCard';

export default function ForecastCards({ data }: { data: {}[] }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
      {data.slice(1, 6).map((v, i) => (
        <ForecastCard data={v} key={i} />
      ))}
    </Box>
  );
}
