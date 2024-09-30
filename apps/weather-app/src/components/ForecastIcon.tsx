import { Box } from '@mui/material';
import React, { useRef } from 'react';
import IconLookup from '../app/icons/IconLookup';
import { useSpring, animated } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
export default function ForecastIcon({
  iconName,
  sx,
}: {
  iconName: string;
  sx?: any;
}) {
  const [{ scale }, api] = useSpring(() => ({
    scale: 1,
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const target = useRef(null);

  const dims = { xs: 100, sm: 150, md: 100, lg: 150 };

  useGesture(
    {
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          scale: 1.2,
        }),
      onHover: ({ hovering }: any) => {
        !hovering && api({ scale: 1 });
      },
    },
    { target, eventOptions: { passive: false } }
  );

  return (
    <Box
      className="ForecastIcon utilCenter"
      ref={target}
      sx={{ height: dims, width: dims, ...sx }}
    >
      <animated.div
        style={{
          height: '100%',
          width: '100%',
          transform: 'perspective(600px)',
          scale,
        }}
      >
        <IconLookup iconName={iconName} />
      </animated.div>
    </Box>
  );
}
