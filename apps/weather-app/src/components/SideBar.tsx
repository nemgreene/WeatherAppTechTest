import { Box, Button, Input, Typography } from '@mui/material';
import React, { SetStateAction } from 'react';
import MetricToggle from './MetricToggle';
import ForecastIcon from './ForecastIcon';
import IconLookup from '../app/icons/IconLookup';
import {
  dateFormat,
  dateFromEpoch,
  LocationInterface,
  tempC,
  tempF,
} from '../app/common/utilities';
import SidebarInput from './SidebarInput';
const { DateTime } = require('luxon');

export default function SideBar({
  data,
  location,
  setData,
}: {
  location: LocationInterface;
  data: {
    address: string;
    temp: number;
    datetimeEpoch: number;
    conditions: string;
  };
  setData: SetStateAction<any>;
}) {
  const dateTime = dateFromEpoch(data?.datetimeEpoch);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 4,
        height: '100%',
        bgcolor: 'background.paper',
      }}
    >
      <Box>
        <SidebarInput setData={setData} />
        {/* <Input variant></Input> */}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography variant="h2">{data?.address.split(',')[0]}</Typography>
        <Typography variant="h4">{dateFormat(dateTime)}</Typography>
        <ForecastIcon iconName={data.conditions} />
        <Box>
          <MetricToggle
            variant={'h1'}
            value1={tempF(data?.temp)}
            value2={tempC(data?.temp)}
          />
        </Box>
        <Typography variant="h4">{data?.conditions}</Typography>
      </Box>
    </Box>
  );
}
