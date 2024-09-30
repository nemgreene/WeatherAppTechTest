'use client';
import { Box } from '@mui/material';
import SideBar from '../components/SideBar';
import Dash from '../components/Dash';
import { useEffect, useState } from 'react';
import {
  LocationInterface,
  locationOptions,
  MetricContext,
} from './common/utilities';
import { ApiClient } from './common/ApiClient';
import SideBarFallback from '../components/SideBarFallback';
import DashFallback from '../components/DashFallback';

export default function Index() {
  const [location, setLocation] = useState<LocationInterface>({
    state: 'awaiting',
    data: undefined,
  });

  const [metricToggle, setMetricToggle] = useState<boolean>(true);
  const [data, setData] = useState<any>(undefined);

  const client = new ApiClient();

  useEffect(() => {
    const fetchWeather = async (location?: string) => {
      const res = await client.getWeather({ location });
      setData(res.data);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setLocation({ data: position, state: 'accepted' });
          const { latitude, longitude } = position?.coords;
          if (latitude && longitude) {
            fetchWeather(`${latitude},${longitude}`);
          }
        },
        () => {
          setLocation({ data: undefined, state: 'rejected' });
        },
        locationOptions
      );
    } else {
      setLocation({ data: undefined, state: 'invalid' });
    }
  }, []);

  const sideBarWidth = {
    width: { xs: '100%', md: '33vw' },
    minHeight: '600px',
    height: { xs: '100vh', md: 'unset' },
  };
  const dashWidth = { width: { xs: '100%', md: '67vw' } };

  return (
    <MetricContext.Provider
      value={{
        toggle: metricToggle,
        setToggle: setMetricToggle,
        client: client,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          minHeight: { xs: '600px', md: '100vh' },
          minWidth: '350px',
          width: '100vw',
          height: 'fit-content',
        }}
      >
        <Box sx={{ ...sideBarWidth }}>
          {data ? (
            <SideBar
              location={location}
              setData={setData}
              data={{
                ...data?.currentConditions,
                address: data?.resolvedAddress || data.address,
              }}
            />
          ) : (
            <SideBarFallback location={location} setData={setData} />
          )}
        </Box>
        <Box sx={{ minHeight: 'fit-content', height: 'unset', ...dashWidth }}>
          {data ? <Dash data={data} /> : <DashFallback location={location} />}
        </Box>
      </Box>
    </MetricContext.Provider>
  );
}
