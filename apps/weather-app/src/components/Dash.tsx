import { Box, Grid2, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import MetricButton from './MetricButton';
import MetricSlider from './MetricSlider';
import ForecastCards from './ForecastCards';
import {
  defaultColumnSpacing,
  defaultGap,
  defaultPadding,
  defaultRowSpacing,
  LocationInterface,
  MetricContext,
  tempC,
  tempF,
} from '../app/common/utilities';
import MetricCard from './MetricCard';
import RoundedButton from './RoundedButton';
import { useTheme } from '@emotion/react';
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

  const context = useContext(MetricContext);
  const { toggle, setToggle } = context ? context : {};
  const theme: any = useTheme();
  return (
    <Box
      className="utilCenter"
      sx={{
        width: '100%',
        minHeight: 'fit-content',
        height: '100%',
        // height: { xs: 'unset', md: '100vh' },
        pt: { xs: 8, md: 3, lg: 5 },
        pb: { xs: 8, md: 3, lg: 5 },
        pl: { xs: 4, sm: 6, md: 8, lg: 11 },
        pr: { xs: 4, sm: 6, md: 8, lg: 11 },
      }}
    >
      <Grid2
        // sx={{ height: '100vh' }}
        container
        columns={12}
        columnSpacing={defaultColumnSpacing}
        rowSpacing={defaultRowSpacing}
      >
        {/* Banner */}
        <Grid2 size={12}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ display: 'flex', flex: 1 }}>
              <Typography variant="h4">Day Overview</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
              <RoundedButton
                onClick={() => {
                  setToggle && setToggle((p) => !p);
                }}
                sx={{
                  bgcolor: toggle
                    ? theme.palette.action.activeButton
                    : theme.palette.action.inactiveButton,
                }}
              >
                <Typography variant="h5">°C</Typography>
              </RoundedButton>
              <RoundedButton
                onClick={() => {
                  setToggle && setToggle((p) => !p);
                }}
                sx={{
                  bgcolor: !toggle
                    ? theme.palette.action.activeButton
                    : theme.palette.action.inactiveButton,
                }}
              >
                <Typography variant="h5">°F</Typography>
              </RoundedButton>
              {/* <MetricButton /> */}
              {/* <MetricButton /> */}
            </Box>
          </Box>
        </Grid2>
        {/* Sliders */}
        <Grid2 size={6}>
          <MetricSlider
            label={'Humidity'}
            color={'humiditySlider'}
            value={Math.round(data?.currentConditions?.humidity) || 50}
          />
        </Grid2>
        <Grid2 size={6}>
          <MetricSlider
            label={'Cloud Cover'}
            color={'cloudSlider'}
            value={Math.round(data?.currentConditions?.cloudcover) || 50}
          />
        </Grid2>
        {/* Cards */}
        <Grid2 size={12} container>
          <Grid2 size={{ xs: 6, md: 3 }}>
            <MetricCard
              label={'Min Temp'}
              value1={tempF(tempmax)}
              value2={tempC(tempmax)}
            />
          </Grid2>
          <Grid2 size={{ xs: 6, md: 3 }}>
            <MetricCard
              label={'Max Temp'}
              value1={tempF(tempmin)}
              value2={tempC(tempmin)}
            />
          </Grid2>
          <Grid2 size={{ xs: 6, md: 3 }}>
            <MetricCard
              label={'Sunrise'}
              value1={sunrise.toFormat('t')}
              value2={sunrise.toFormat('T')}
            />
          </Grid2>
          <Grid2 size={{ xs: 6, md: 3 }}>
            <MetricCard
              label={'Sunset'}
              value1={sunset.toFormat('t')}
              value2={sunset.toFormat('T')}
            />
          </Grid2>
        </Grid2>
        {/* Forecast cards */}
        <Grid2 size={12} sx={{ pt: 1 }}>
          <Typography variant="h4">5 Day Forecast</Typography>
        </Grid2>
        {data.days && <ForecastCards data={data.days} />}
      </Grid2>
    </Box>
  );
}
