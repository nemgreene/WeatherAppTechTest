'use client';
import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';
import { Capriola } from 'next/font/google';

const capriola = Capriola({ weight: ['400'], subsets: ['latin'] });

const fontCommon: TypographyStyleOptions = {
  whiteSpace: 'nowrap',
  textAlign: 'center',
};
const theme = createTheme(
  {
    typography: {
      fontSize: 10,
      fontFamily: capriola.style.fontFamily,
      h1: {
        ...fontCommon,
      },
      h2: {
        ...fontCommon,
      },
      h3: {
        ...fontCommon,
      },
      h4: {
        ...fontCommon,
      },
      h5: {
        ...fontCommon,
      },
      h6: {
        ...fontCommon,
      },
    },
    palette: {
      mode: 'dark',
      background: { default: '#100E1D', paper: '#1E213A' },
    },
  },
  {
    components: {
      MuiCard: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: ({ theme }: { theme: Theme }) => ({
            '--Paper-shadow': 'unset',
            // Some CSS
            borderRadius: '20px',
            [theme.breakpoints.up('xs')]: {
              padding: theme.spacing(3),
            },
            [theme.breakpoints.up('md')]: {
              padding: theme.spacing(2),
            },
          }),
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

export default responsiveFontSizes(theme);
