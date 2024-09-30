import { Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { MetricContext, MetricContextInterface } from '../app/common/utilities';
import { useSpring, animated } from '@react-spring/web';

export default function MetricToggle({
  value1,
  value2,
  ...rest
}: {
  value1: string;
  value2: string;
  // variant: string;
} & any) {
  const { toggle }: MetricContextInterface = useContext(MetricContext);
  const [{ x, o1, o2 }, api] = useSpring(() => ({
    x: -100,
    o1: 0,
    o2: 1,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  useEffect(() => {
    api.start(
      toggle
        ? {
            x: -100,
            o1: 0,
            o2: 1,
          }
        : {
            x: 0,
            o1: 1,
            o2: 0,
          }
    );
  }, [toggle]);

  return (
    <Typography
      {...(rest && rest)}
      sx={{ position: 'relative', overflow: 'hidden' }}
    >
      <animated.div
        style={{
          transform: x.to((value) => `translateX(${value}%)`),
          paddingLeft: '10px',
          paddingRight: '10px',
        }}
      >
        <animated.div style={{ opacity: o1 }}>{value1}</animated.div>
        <animated.div
          style={{
            opacity: o2,
            top: 0,
            left: '100%',
            position: 'absolute',
            width: '100%',
            textAlign: 'center',
            paddingLeft: '10px',
            paddingRight: '10px',
          }}
        >
          {value2}
        </animated.div>
      </animated.div>
    </Typography>
  );
}
