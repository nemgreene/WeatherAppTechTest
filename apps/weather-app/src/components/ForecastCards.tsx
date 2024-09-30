import { Grid2 } from '@mui/material';
import React from 'react';
import ForecastCard from './ForecastCard';
import {
  defaultColumnSpacing,
  defaultRowSpacing,
} from '../app/common/utilities';

export default function ForecastCards({ data }: { data: any[] }) {
  return (
    <Grid2
      container
      size={12}
      columnSpacing={{ ...defaultColumnSpacing, lg: 1 }}
      rowSpacing={defaultRowSpacing}
      columns={{ xs: 3, lg: 5 }}
      sx={{ justifyContent: 'center' }}
    >
      {data.slice(1, 6).map((v, i) => (
        <Grid2 size={1} key={i}>
          <ForecastCard data={v} key={i} />
        </Grid2>
      ))}
    </Grid2>
  );
}
