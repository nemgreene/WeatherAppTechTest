import { useTheme } from '@emotion/react';
import {
  Box,
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from '@mui/material';
import React from 'react';

export default function MetricSlider({
  value,
  label,
  color,
}: {
  value: number;
  label: string;
  color?: string;
}) {
  const theme: any = useTheme();
  return (
    <Box sx={{ width: '100%' }}>
      <Card sx={{ p: 0, pb: 0 }}>
        <CardContent
          sx={{
            pt: 0,
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pb: '0 !important',
          }}
        >
          <Typography variant="h5">{label}</Typography>
          <Typography variant="h4">{value}%</Typography>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
              <Box sx={{ flex: 1 }}></Box>
              <Typography variant={'subtitle1'} sx={{ display: 'flex' }}>
                %
              </Typography>
            </Box>
            <LinearProgress
              sx={{
                backgroundColor: 'white',
                borderRadius: '5px',
                height: '10px',
                '& .MuiLinearProgress-bar': {
                  ...(color && {
                    backgroundColor: theme.palette[color],
                  }),
                },
              }}
              // {...(color && { color })}
              variant="determinate"
              value={value}
            />
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
              <Typography variant={'subtitle1'} sx={{ display: 'flex' }}>
                0
              </Typography>
              <Box sx={{ flex: 1 }}></Box>
              <Typography variant={'subtitle1'} sx={{ display: 'flex' }}>
                100
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
