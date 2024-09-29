'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme(
  {
    typography: { fontSize: 10 },
    palette: {
      mode: 'dark',
      background: { default: '#100E1D', paper: '#1E213A' },
    },
  },
  {
    components: {
      '.MuiCardContent-root': {
        styleOverrides: {
          root: {
            // Some CSS
            borderRadius: '20px',
            backgroundColor: '#1E213A',
          },
        },
      },
      MuiCard: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            '--Paper-shadow': 'unset',
            // Some CSS
            borderRadius: '20px',
            backgroundColor: '#1E213A',
          },
        },
      },
    },
    palette: {
      cloudSlider: '#FAFF00',
      humiditySlider: '#A9FF53',
      action: {
        activeButton: '#FFFFFF',
        inactiveButton: '#585676',
      },
    },
  }
);

export default theme;
