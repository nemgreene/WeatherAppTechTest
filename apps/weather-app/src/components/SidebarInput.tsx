import { Box, Button, Input, TextField, Typography } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import React, { SetStateAction, useContext, useEffect } from 'react';
import {
  MetricContext,
  showToast,
  validCityRegex,
} from '../app/common/utilities';
import RoundedButton from './RoundedButton';
import EastIcon from '@mui/icons-material/East';
import { ApiClientInterface } from '../app/common/ApiClient';

interface IFormInputs {
  LocationName: string;
}

export default function SidebarInput({
  setData,
}: {
  setData: SetStateAction<any>;
}) {
  const context = useContext(MetricContext);
  const client: ApiClientInterface = context ? context.client : undefined;
  const {
    handleSubmit,
    control,
    watch,
    reset,
    setFocus,

    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      LocationName: '',
    },
  });
  const onSubmit: SubmitHandler<IFormInputs> = async ({ LocationName }) => {
    if (client && LocationName) {
      const res = await client.getWeather({ location: LocationName });
      console.log(res.data);
      if (res.data) {
        setData(res.data);
        reset();
      } else {
        showToast('error', 'No location match');
      }
      setFocus('LocationName');
    }
    if (errors?.LocationName) {
      console.log(errors);
    }
  };

  useEffect(() => {
    setFocus('LocationName');
  });
  return (
    <Box
      className="utilCenter"
      sx={{ flexDirection: 'column', width: '100%', position: 'relative' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          flexDirection: 'row',
          width: '100%',
        }}
      >
        <form
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            // sx={{ display: 'flex' }}
            name="LocationName"
            control={control}
            rules={{
              required: { value: true, message: 'Enter Location' },
              minLength: { value: 1, message: 'Enter Location' },
              pattern: { value: validCityRegex, message: 'Invalid Input' },
            }}
            render={({
              field: { ref, ...newField },
              fieldState: { error },
            }) => (
              <Box sx={{ flex: 1, display: 'flex' }} className="utilCenter">
                <TextField
                  type="string"
                  variant="outlined"
                  {...newField}
                  inputRef={ref}
                  error={!!error}
                  size={'small'}
                  onFocus={() => {}}
                  // helperText={
                  //   errors.LocationName ? errors.LocationName.message : null
                  // }
                  sx={{
                    width: '100%',
                    borderRadius: '5px',
                    input: {
                      p: '5px',
                      pl: 1,
                      height: '35px',
                      borderRadius: '5px',
                      bgcolor: 'white',
                      //   width: '100%',
                      //   flex: 1,
                      //   // borderWidth: '5px',
                      color: 'black',
                    },
                  }}
                />
              </Box>
            )}
          />
          {/* <input type="submit" /> */}
          <Box sx={{ pl: 2 }} className="utilCenter">
            <RoundedButton
              type="submit"
              icon={<EastIcon sx={{ fontSize: 20 }} />}
            >
              Submit
            </RoundedButton>
          </Box>
        </form>
      </Box>
      {!!errors && (
        <Typography
          variant="h4"
          sx={{ color: 'red', position: 'absolute', bottom: '-100%' }}
        >
          {errors.LocationName?.message}
        </Typography>
      )}
    </Box>
  );
}
