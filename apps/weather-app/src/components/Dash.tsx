import { Box, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import MetricButton from './MetricButton';
import MetricSlider from './MetricSlider';
import ForecastCards from './ForecastCards';
import { LocationInterface, tempC, tempF } from '../app/common/utilities';
import MetricCard from './MetricCard';
const { DateTime } = require('luxon');

export default function Dash({
  data,
}: {
  data: {
    currentConditions: { humidity: number; cloudcover: number };
    days: any[];
  };
}) {
  const { tempmax, tempmin, sunriseEpoch, sunsetEpoch } = data?.days[0];
  const sunrise = sunriseEpoch
    ? DateTime.fromSeconds(sunriseEpoch)
    : DateTime.now();
  const sunset = sunsetEpoch
    ? DateTime.fromSeconds(sunsetEpoch)
    : DateTime.now();
  return (
    <Box sx={{ width: '100%', p: 12 }}>
      {/* Header */}
      <Box sx={{ pb: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box sx={{ display: 'flex', flex: 1 }}>
            <Typography variant="h4">Day Overview</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <MetricButton />
            <MetricButton />
          </Box>
        </Box>
      </Box>
      {/* SLiders */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          gap: 5,
          justifyContent: 'space-evenly',
        }}
      >
        <MetricSlider
          label={'Humidity'}
          color={'humiditySlider'}
          value={data?.currentConditions?.humidity}
        />
        <MetricSlider
          label={'Cloud Cover'}
          color={'cloudSlider'}
          value={data?.currentConditions?.cloudcover}
        />
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          gap: 5,
          justifyContent: 'space-evenly',
          pt: 5,
          pb: 5,
        }}
      >
        <MetricCard
          label={'Min Temp'}
          value1={tempF(tempmax)}
          value2={tempC(tempmax)}
        />
        <MetricCard
          label={'Max Temp'}
          value1={tempF(tempmin)}
          value2={tempC(tempmin)}
        />
        <MetricCard
          label={'Sunrise'}
          value1={sunrise.toFormat('T')}
          value2={sunrise.toFormat('t')}
        />
        <MetricCard
          label={'Sunset'}
          value1={sunset.toFormat('T')}
          value2={sunset.toFormat('t')}
        />
      </Box>

      <Box sx={{ height: '33vh' }}>
        <Typography variant="h4">5 Day Forecast</Typography>
        <Box>{data.days && <ForecastCards data={data.days} />}</Box>
      </Box>
    </Box>
  );
}
