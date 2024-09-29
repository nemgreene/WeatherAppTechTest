'use client';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import styles from './page.module.css';
import SideBar from '../components/SideBar';
import Dash from '../components/Dash';
import { PropsWithChildren, Suspense, useEffect, useState } from 'react';
import {
  LocationInterface,
  locationOptions,
  MetricContext,
} from './common/utilities';
import axios from 'axios';
import { ApiClient, ApiClientInterface } from './common/ApiClient';
import { ToastContainer } from 'react-toastify';
import SideBarFallback from '../components/SideBarFallback';
import DashFallback from '../components/DashFallback';

export default function Index() {
  const [location, setLocation] = useState<LocationInterface>({
    state: 'awaiting',
    data: undefined,
  });

  const [metricToggle, setMetricToggle] = useState<boolean>(false);
  const [data, setData] = useState<any>(undefined);

  const client = new ApiClient();

  const fetchWeather = async (location?: string) => {
    const res = await client.getWeather({ location });
    setData(res.data);
  };

  useEffect(() => {
    fetchWeather();
    return;
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
          flexDirection: 'row',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Box sx={{ height: '100vh', width: '25vw', minWidth: '25vw' }}>
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
        <Box sx={{ height: '100vh', width: '75vw', minWidth: '75vw' }}>
          {data ? <Dash data={data} /> : <DashFallback location={location} />}
        </Box>
      </Box>
    </MetricContext.Provider>
  );
}
