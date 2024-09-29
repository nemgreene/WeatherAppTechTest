import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import { MetricContext } from '../app/common/utilities';

export default function MetricToggle({
  value1,
  value2,
  ...rest
}: {
  value1: string;
  value2: string;
  // variant: string;
} & any) {
  const context = useContext(MetricContext);
  const { toggle, setToggle } = context ? context : {};

  return <Typography {...(rest && rest)}>{value1}</Typography>;
}
