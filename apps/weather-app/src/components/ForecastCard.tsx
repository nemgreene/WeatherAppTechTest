import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { dateFormat, dateFromEpoch } from '../app/common/utilities';
import IconLookup from '../app/icons/IconLookup';
import MetricToggle from './MetricToggle';

export default function ForecastCard({ data }: any) {
  const { datetimeEpoch, conditions, tempmax, tempmin } = data;
  const date = dateFromEpoch(datetimeEpoch);
  // console.log(data);
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent sx={{ height: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box className="utilCenter">
            <Typography variant="h5">{dateFormat(date)}</Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <IconLookup iconName={data.icon} />
          </Box>
          <Box className="utilCenter">
            <Typography sx={{ pt: 1, pb: 1 }} variant="h6">
              {conditions}
            </Typography>
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}
          >
            <Box>
              <MetricToggle variant="h6" value1={tempmin} />
            </Box>
            <Box sx={{ flex: 1 }}></Box>
            <Box>
              <MetricToggle variant="h6" value1={tempmax} />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
