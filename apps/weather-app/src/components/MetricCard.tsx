import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { TypePredicateKind } from 'typescript';
import MetricSlider from './MetricSlider';
import MetricToggle from './MetricToggle';
import { tempF } from '../app/common/utilities';

export default function MetricCard({
  value1,
  value2,
  label,
}: {
  label: string;
  value1: number | string;
  value2: number | string;
}) {
  return (
    <Card sx={{ width: '100%' }}>
      <Box
        sx={{
          flexDirection: 'column',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          p: 4,
        }}
      >
        <Typography variant="h5">{label}</Typography>
        <MetricToggle variant="h4" value1={value1} value2={value2} />
        {/* <Typography variant="h6">{value}</Typography> */}
      </Box>
    </Card>
  );
}
