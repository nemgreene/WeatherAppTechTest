import { Box, Card, CardContent, Grid2, Typography } from '@mui/material';
import React, { useContext } from 'react';
import {
  dateFormat,
  dateFromEpoch,
  MetricContext,
  MetricContextInterface,
  tempC,
  tempF,
} from '../app/common/utilities';
import IconLookup from '../app/icons/IconLookup';
import MetricToggle from './MetricToggle';
import ForecastIcon from './ForecastIcon';

export default function ForecastCard({ data }: any) {
  const { datetimeEpoch, conditions, tempmax, tempmin } = data;
  const date = dateFromEpoch(datetimeEpoch);
  const { toggle, setToggle }: MetricContextInterface =
    useContext(MetricContext);
  return (
    <Card
      onClick={() => {
        setToggle && setToggle((p) => !p);
      }}
      sx={{ pl: '0 !important', pr: '0 !important', cursor: 'pointer' }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box className="utilCenter">
          <Typography variant="h6">{dateFormat(date)}</Typography>
        </Box>
        <Box sx={{ flex: 1 }} className="utilCenter">
          <ForecastIcon iconName={data.icon} />
        </Box>
        <Box className="utilCenter">
          <Typography
            // sx={{ pt: 1, pb: 1, textAlign: 'center' }}
            variant="subtitle2"
          >
            {conditions.split(',')[0] || 'Unavailable'}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            paddingLeft: { xs: 2 },
            paddingRight: { xs: 2 },
          }}
        >
          <Box>
            <MetricToggle
              variant="subtitle1"
              value1={tempF(tempmax)}
              value2={tempC(tempmax)}
            />
          </Box>
          <Box sx={{ flex: 1 }}></Box>
          <Box sx={{ opacity: 0.7 }}>
            <MetricToggle
              variant="subtitle1"
              value1={tempF(tempmin)}
              value2={tempC(tempmin)}
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
