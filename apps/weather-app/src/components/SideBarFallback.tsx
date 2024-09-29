import React, { SetStateAction } from 'react';
import { LocationInterface } from '../app/common/utilities';
import { Box, CircularProgress, Typography } from '@mui/material';
import SidebarInput from './SidebarInput';

// type LocationQueryState = 'awaiting' | 'accepted' | 'rejected' | 'invalid';
const FallbackContent = ({
  location,
  setData,
}: {
  location: LocationInterface;
  setData: SetStateAction<any>;
}) => {
  switch (location.state) {
    case 'awaiting':
      return (
        <Box className="utilCenter" sx={{ flexDirection: 'column', gap: 5 }}>
          <Typography variant={'h4'}>Awaiting Permissions</Typography>
          <CircularProgress />
        </Box>
      );

    case 'accepted':
      return (
        <Box className="utilCenter" sx={{ flexDirection: 'column', gap: 5 }}>
          <Typography variant={'h4'}>Loading Your Data</Typography>
          <CircularProgress />
        </Box>
      );
    case 'rejected':
    default:
      return (
        <Box sx={{ width: '100%' }}>
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
            <Typography variant="h4">No Location Available</Typography>
            <Typography variant="h5">Enter your location</Typography>
          </Box>
        </Box>
      );
      break;
  }
};

export default function SideBarFallback({
  location,
  setData,
}: {
  location: LocationInterface;
  setData: SetStateAction<any>;
}) {
  return (
    <Box
      className="utilCenter"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 4,
        height: '100%',
        bgcolor: 'background.paper',
      }}
    >
      <FallbackContent location={location} setData={setData} />
    </Box>
  );
}
