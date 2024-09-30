import { useTheme } from '@emotion/react';
import { Button, IconButton } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { JsxElement } from 'typescript';

export default function RoundedButton({
  children,
  onClick,
  sx,
  icon,
  ...rest
}: PropsWithChildren<
  { sx: any; onClick: () => void; icon?: JsxElement } & any
>) {
  const theme: any = useTheme();
  const styles = {
    bgcolor: 'white',
    color: 'black',
    borderRadius: '50%',
    height: '45px',
    width: '45px',
    minWidth: '45px',
    '&:focus': {
      border: `solid ${theme.palette.primary.main} 3px`,
      //   color: 'aqua',
    },
    '&:hover': {
      border: `solid ${theme.palette.primary.main} 3px`,
      backgroundColor: '#FFFFFF95',
    },
  };
  return icon ? (
    <IconButton
      sx={{
        ...styles,
        ...sx,
      }}
      {...rest}
    >
      {icon}
    </IconButton>
  ) : (
    <Button
      sx={{
        ...styles,
        ...sx,
      }}
      {...rest}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
