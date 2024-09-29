import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import {
  dateFormat,
  dateFromEpoch,
  tempC,
  tempF,
} from '../app/common/utilities';
import IconLookup from '../app/icons/IconLookup';
import MetricToggle from './MetricToggle';

export default function ForecastCard({ data }: any) {
  const { datetimeEpoch, conditions, tempmax, tempmin } = data;
  const date = dateFromEpoch(datetimeEpoch);
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent sx={{ height: '100%', p: 0, pt: 2, pb: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box className="utilCenter">
            <Typography variant="h5">{dateFormat(date)}</Typography>
          </Box>
          <Box sx={{ flex: 1 }} className="utilCenter">
            <IconLookup iconName={data.icon} />
          </Box>
          <Box className="utilCenter">
            <Typography sx={{ pt: 1, pb: 1 }} variant="h6">
              {conditions}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              pl: 2,
              pr: 2,
            }}
          >
            <Box>
              <MetricToggle
                variant="h6"
                value1={tempF(tempmin)}
                value2={tempC(tempmin)}
              />
            </Box>
            <Box sx={{ flex: 1 }}></Box>
            <Box>
              <MetricToggle
                variant="h6"
                value1={tempF(tempmax)}
                value2={tempC(tempmax)}
              />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
