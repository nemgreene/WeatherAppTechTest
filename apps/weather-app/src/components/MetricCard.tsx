import { Box, Card, CardContent, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { TypePredicateKind } from 'typescript';
import MetricSlider from './MetricSlider';
import MetricToggle from './MetricToggle';
import { MetricContext, tempF } from '../app/common/utilities';

export default function MetricCard({
  value1,
  value2,
  label,
}: {
  label: string;
  value1: number | string;
  value2: number | string;
}) {
  const context = useContext(MetricContext);
  const { setToggle } = context ? context : {};
  return (
    <Card
      onClick={() => {
        setToggle && setToggle((p) => !p);
      }}
      sx={{ width: '100%', cursor: 'pointer' }}
    >
      <Box
        sx={{
          flexDirection: 'column',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5" sx={{ whiteSpace: 'nowrap' }}>
          {label}
        </Typography>
        <MetricToggle
          variant="h4"
          value1={value1}
          value2={value2}
          sx={{ whiteSpace: 'nowrap' }}
        />
        {/* <Typography variant="h6">{value}</Typography> */}
      </Box>
    </Card>
  );
}
