'use client';

import { DateTime } from 'luxon';
import { createContext, Dispatch, SetStateAction } from 'react';
import { ApiClientInterface } from './ApiClient';

type LocationQueryState = 'awaiting' | 'accepted' | 'rejected' | 'invalid';

//Lat/Long stored in state if users accept geoservices
//State used to determine what is displayed to the users
export interface LocationInterface {
  state: LocationQueryState;
  data: GeolocationPosition | undefined;
}

//Params for the geolocation query
export const locationOptions = {
  enableHighAccuracy: false,
  maximumAge: Infinity,
};

//Weather API sends back data approximately looking like this
export interface WeatherApiResponse {
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  description: string;
  days: any[];
  alerts: any[];
  currentConditions: any;
}

//This context will keep track of the metric currently being displayed(default farenheit/12 hr time)
//API sends back farenheit data
export interface MetricContextInterface {
  client: ApiClientInterface | undefined;
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

//Context
export const MetricContext = createContext<MetricContextInterface>({
  client: undefined,
  toggle: true,
  setToggle: () => {},
});

///Converts farenheit to formatted string with farenheit
export const tempF = (value: number): string => `${Math.round(value)}°F`;
///Converts farenheit to formatted celsius string with celsius
export const tempC = (value: number): string =>
  `${Math.round(((value - 32) * 5) / 9)}°C`;

//DateTime wrapper to ensure a datetime obj is always present, defaults to current time on error
export const dateFromEpoch = (epoch: number | undefined): DateTime => {
  return epoch ? DateTime.fromSeconds(epoch) : DateTime.now();
};

//Converts dateTime object to ddd, DD MM format for display
export const dateFormat = (date: DateTime) => {
  return date.toRelativeCalendar() === 'tomorrow'
    ? 'Tomorrow'
    : `${date.toFormat('ccc')},  ${date.toFormat('dd')} ${date.toFormat(
        'MMM'
      )}`;
};

//City name matcher
// https://stackoverflow.com/questions/11757013/regular-expressions-for-city-name
export const validCityRegex = new RegExp(
  "^[a-zA-Z\u0080-\u024F]+(?:. |-| |')*([1-9a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$"
);

//toastify handler
//https://dev.to/koyablue/how-to-use-react-toastify-with-app-router-447n
import { toast, ToastContent, ToastOptions, Slide, Id } from 'react-toastify';

export const defaultToastOptions: ToastOptions = {
  position: 'top-center',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
  transition: Slide,
};

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default';

/**
 * Display toast
 *
 * @param {ToastType} type
 * @param {ToastContent} content
 * @param {ToastOptions} [options=defaultToastOption]
 * @return {Id}
 */
export const showToast = (
  type: ToastType,
  content: ToastContent,
  options: Partial<ToastOptions> = {}
): Id => {
  const optionsToApply = { ...defaultToastOptions, ...options };

  switch (type) {
    case 'success':
      return toast.success(content, optionsToApply);
    case 'error':
      return toast.error(content, optionsToApply);
    case 'info':
      return toast.info(content, optionsToApply);
    case 'warning':
      return toast.warn(content, optionsToApply);
    case 'default':
      return toast(content, optionsToApply);
    default:
      return toast(content, optionsToApply);
  }
};

export const defaultColumnSpacing = { xs: 2, md: 1, lg: 2 };
export const defaultRowSpacing = { xs: 2, md: 1, lg: 4 };
export const defaultGap = { xs: 2, md: 4, lg: 5 };
export const defaultPadding = { xs: 2, md: 4 };
