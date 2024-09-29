'use client';

import { DateTime } from 'luxon';
import { createContext, SetStateAction } from 'react';
import { ApiClientInterface } from './ApiClient';

type LocationQueryState = 'awaiting' | 'accepted' | 'rejected' | 'invalid';

export interface LocationInterface {
  state: LocationQueryState;
  data: GeolocationPosition | undefined;
}

export const locationOptions = {
  enableHighAccuracy: false,
  maximumAge: Infinity,
};

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

export const MetricContext = createContext<
  | {
      client: ApiClientInterface;
      toggle: boolean;
      setToggle: (toggle: boolean) => void;
    }
  | undefined
>(undefined);
export const tempF = (value: number) => `${value}°F`;
export const tempC = (value: number) => `${((value - 32) * 5) / 9}°C`;

export const dateFromEpoch = (epoch: number | undefined): DateTime => {
  return epoch ? DateTime.fromSeconds(epoch) : DateTime.now();
};

export const dateFormat = (date: DateTime) => {
  return date.toRelativeCalendar() === 'tomorrow'
    ? 'Tomorrow'
    : `${date.toFormat('ccc')},  ${date.toFormat('dd')} ${date.toFormat(
        'MMM'
      )}`;
};

// https://stackoverflow.com/questions/11757013/regular-expressions-for-city-name
export const validCityRegex = new RegExp(
  "^[a-zA-Z\u0080-\u024F]+(?:. |-| |')*([1-9a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$"
);

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
