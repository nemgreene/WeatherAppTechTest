import React from 'react';
import { LocationInterface } from '../app/common/utilities';
import { Box, Typography } from '@mui/material';
import NorthWestIcon from '@mui/icons-material/NorthWest';

// type LocationQueryState = 'awaiting' | 'accepted' | 'rejected' | 'invalid';
const FallbackContent = ({ location }: { location: LocationInterface }) => {
  switch (location.state) {
    case 'awaiting':
      return (
        <Box className="utilCenter" sx={{ flexDirection: 'column', gap: 5 }}>
          <NorthWestIcon sx={{ fontSize: 40 }} />
          <Typography variant={'h5'}>Allow Permissions to continue</Typography>
        </Box>
      );

    case 'accepted':
      return (
        <Box className="utilCenter" sx={{ flexDirection: 'column', gap: 5 }}>
          <Typography variant={'h5'}>Please wait...</Typography>
        </Box>
      );
    case 'rejected':
    default:
      return (
        <Box sx={{ width: '100%' }}>
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
            <Typography variant="h5">No Location Available</Typography>
          </Box>
        </Box>
      );
      break;
  }
};

export default function DashFallback({
  location,
}: {
  location: LocationInterface;
}) {
  return (
    <Box
      className="utilCenter"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 4,
        height: '100%',
        bgcolor: 'background.main',
      }}
    >
      <FallbackContent location={location} />
    </Box>
  );
}
